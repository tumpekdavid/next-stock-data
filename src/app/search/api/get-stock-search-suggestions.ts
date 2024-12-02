import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import { StockSuggestionsApiResponse } from "@/types/api"

export type StockSuggestion = {
  symbol: string;
  name: string;
};

const fetchStockSuggestions = async (keywords: string): Promise<StockSuggestion[]> => {
    const response = await api.get<StockSuggestionsApiResponse>("/query", {
      params: {
        function: "SYMBOL_SEARCH",
        keywords,
      },
    });
  
    const { bestMatches } = response.data;

    return bestMatches.map((match) => ({
      symbol: match["1. symbol"],
      name: match["2. name"],
    }));
  };
  
  export const useStockSuggestions = (keywords: string) => {
    return useQuery<StockSuggestion[]>({
        queryKey: ["stockSuggestions", keywords],
        queryFn: () => fetchStockSuggestions(keywords),
        enabled: Boolean(keywords),
    }
    );
  };
