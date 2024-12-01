import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import { StockSuggestion } from "@/types/api"

const mockStockSuggestions: StockSuggestion[] = [
    {
      symbol: "AAPL",
      name: "Apple Inc",
      type: "Equity",
      region: "United States",
      marketOpen: "09:30",
      marketClose: "16:00",
      timezone: "UTC-05",
      currency: "USD",
      matchScore: "1.0000",
    },
    {
      symbol: "APPL34.SAO",
      name: "Apple Inc",
      type: "Equity",
      region: "Brazil",
      marketOpen: "10:00",
      marketClose: "17:00",
      timezone: "UTC-03",
      currency: "BRL",
      matchScore: "0.9000",
    },
    {
      symbol: "APC.DEX",
      name: "Apple Inc",
      type: "Equity",
      region: "Germany",
      marketOpen: "08:00",
      marketClose: "16:30",
      timezone: "UTC+01",
      currency: "EUR",
      matchScore: "0.8500",
    },
  ];

const fetchStockSuggestions = async (keywords: string): Promise<StockSuggestion[]> => {
    return mockStockSuggestions.filter((item) =>
        item.name.toLowerCase().includes(keywords.toLowerCase())
      );

    const response = await api.get("/query", {
      params: {
        function: "SYMBOL_SEARCH",
        keywords,
      },
    });
  
    const { bestMatches } = response.data;

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
