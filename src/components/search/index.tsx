import { useEffect, useState, useRef, useCallback } from "react";
import { createPortal } from "react-dom";

interface SearchResult {
  url: string;
  title: string;
  excerpt: string;
  content?: string;
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Global Pagefind types
declare global {
  interface Window {
    pagefind?: {
      init: () => Promise<any>;
      search: (query: string) => Promise<any>;
    };
    init?: () => Promise<any>;
  }
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagefind, setPagefind] = useState<any>(null);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [pagefindInitialized, setPagefindInitialized] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Initialize Pagefind
  useEffect(() => {
    const initPagefind = async () => {
      if (pagefindInitialized) return;

      try {
        setSearchError(null);
        setPagefindInitialized(true);

        // Load Pagefind script dynamically with ES module import
        try {
          const pagefindModule = await import("/_pagefind/pagefind.js" as any);
          if (pagefindModule?.init && pagefindModule?.search) {
            await pagefindModule.init();
            setPagefind(pagefindModule);
          } else {
            console.error(
              "Pagefind module did not export expected functions",
              pagefindModule
            );
            setSearchError("Pagefind module exports unavailable");
          }
        } catch (err) {
          console.error("Dynamic import of pagefind failed", err);
          setSearchError("Failed to load Pagefind module");
        }
      } catch (error) {
        console.error("Failed to load Pagefind:", error);
        setSearchError("Failed to load search functionality");
      }
    };

    if (isOpen && !pagefind && !pagefindInitialized) {
      initPagefind();
    }
  }, [isOpen, pagefind, pagefindInitialized]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }

    return undefined;
  }, [isOpen, onClose]);

  // Search function
  const performSearch = useCallback(
    async (searchQuery: string) => {
      if (!pagefind) {
        return;
      }

      if (!searchQuery.trim()) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        const searchResults = await pagefind.search(searchQuery);

        if (searchResults?.results?.length) {
          const navPatterns = [
            "/",
            "/blog",
            "/projects",
            "/whoami",
            /^\/tags/,
            /^\/blog\/page\//,
          ];

          const shouldExclude = (url: string): boolean => {
            const cleanUrl = url.replace(/\/$/, "");
            return navPatterns.some((pattern) => {
              if (typeof pattern === "string") {
                return cleanUrl === pattern;
              }
              if (pattern instanceof RegExp) {
                return pattern.test(cleanUrl);
              }
              return false;
            });
          };

          const processedResults: SearchResult[] = (
            await Promise.all(
              searchResults.results.map(async (r: any) => {
                const full = await r.data();
                const cleanUrl = full.url
                  .replace(/^\/?dist\//, "/")
                  .replace(/^\/?\.vercel\/output\/static\//, "/");

                return {
                  url: cleanUrl,
                  title: full.meta?.title || r.meta?.title || "Untitled",
                  excerpt: full.excerpt || r.excerpt,
                  content: full.content,
                  meta: full.meta,
                } as SearchResult;
              })
            )
          ).filter((res) => !shouldExclude(res.url));
          setResults(processedResults);
        } else {
          setResults([]);
        }
      } catch (error) {
        console.error("Search error:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    },
    [pagefind]
  );

  // Debounced search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch(query);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, performSearch]);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }

    return undefined;
  }, [isOpen, onClose]);

  // Don't render if not open
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 pt-20">
      <div
        ref={modalRef}
        className="relative mx-4 max-h-[80vh] w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-2xl dark:bg-gray-800"
      >
        {/* Search Input */}
        <div className="flex items-center border-b border-gray-200 p-4 dark:border-gray-700">
          <svg
            className="mr-3 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts..."
            className="flex-1 border-none bg-transparent text-gray-900 placeholder-gray-500 outline-none dark:text-gray-100 dark:placeholder-gray-400"
          />
          <button
            onClick={onClose}
            className="ml-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto">
          {searchError && (
            <div className="p-4 text-center">
              <div className="text-red-500 dark:text-red-400 mb-2">
                ⚠️ Search Unavailable
              </div>
              <div className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                {searchError}
              </div>
              {searchError.includes("Run 'pnpm generate-search'") && (
                <div className="text-blue-600 dark:text-blue-400 text-sm">
                  <strong>How to fix:</strong>
                  <br />
                  1. Open a terminal
                  <br />
                  2. Run:{" "}
                  <code className="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-700">
                    pnpm generate-search
                  </code>
                  <br />
                  3. Refresh this page
                </div>
              )}
            </div>
          )}

          {loading && !searchError && (
            <div className="p-4 text-center text-gray-500 dark:text-gray-400">
              Searching...
            </div>
          )}

          {!loading && !searchError && query.trim() && results.length === 0 && (
            <div className="p-4 text-center text-gray-500 dark:text-gray-400">
              No results found for "{query}"
            </div>
          )}

          {!loading && !searchError && results.length > 0 && (
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {results.map((result, index) => (
                <a
                  key={index}
                  href={result.url}
                  onClick={onClose}
                  className="block p-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <h3 className="mb-1 text-lg font-medium text-gray-900 dark:text-gray-100">
                    {result.title}
                  </h3>
                  <p
                    className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400"
                    dangerouslySetInnerHTML={{ __html: result.excerpt }}
                  />
                  <div className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                    {result.url}
                  </div>
                </a>
              ))}
            </div>
          )}

          {!query.trim() && !searchError && (
            <div className="p-4 text-center text-gray-500 dark:text-gray-400">
              Start typing to search...
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
