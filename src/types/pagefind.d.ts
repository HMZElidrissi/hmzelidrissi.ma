declare module "/*@vite-ignore*/ /_pagefind/pagefind.js" {
  export const init: () => Promise<void>;
  export const search: (query: string, options?: any) => Promise<any>;
  export const filters: () => Promise<any>;
  export const debouncedSearch: (
    query: string,
    options?: any,
    debounceMs?: number
  ) => Promise<any>;
  export const preload: (term: string, options?: any) => Promise<void>;
}
