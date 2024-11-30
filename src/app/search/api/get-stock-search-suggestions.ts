import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import { StockSuggestion } from "@/types/api"

const fetchStockSuggestions = async (keywords: string): Promise<StockSuggestion[]> => {
    const response = await api.get("/query", {
      params: {
        function: "SYMBOL_SEARCH",
        keywords,
      },
    });
  
    console.log(response);
    const { bestMatches } = response.data;
  
    // Map the response data into the required format
    return bestMatches.map((match: any) => ({
      symbol: match["1. symbol"],
      name: match["2. name"],
      type: match["3. type"],
      region: match["4. region"],
      marketOpen: match["5. marketOpen"],
      marketClose: match["6. marketClose"],
      timezone: match["7. timezone"],
      currency: match["8. currency"],
      matchScore: match["9. matchScore"],
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
