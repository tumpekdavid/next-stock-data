"use client"

import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 1000
    },
    mutations: {
      retry: 1,
    },
  },
});
