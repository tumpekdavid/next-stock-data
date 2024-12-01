"use client"

import { QueryClient } from "@tanstack/react-query";

const ONE_DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
        refetchOnWindowFocus: false,
        staleTime: ONE_DAY_IN_MILLISECONDS,
    },
    mutations: {
      retry: 1,
    },
  },
});
