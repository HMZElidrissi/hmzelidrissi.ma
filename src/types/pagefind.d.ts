declare module "/pagefind/pagefind.js" {
  export const init: () => Promise<void>;
  export const search: (q: string, opts?: unknown) => Promise<any>;
  export const filters: () => Promise<any>;
  export const debouncedSearch: (
    q: string,
    opts?: unknown,
    debounceMs?: number
  ) => Promise<any>;
  export const preload: (term: string, opts?: unknown) => Promise<void>;
}
