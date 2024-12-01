import { api } from "@/lib/api-client";
import { useQuery } from "@tanstack/react-query";

export type StockDetails = {
  symbol: string;
  open: string;
  high: string;
  low: string;
  price: string;
  volume: string;
  latestTradingDay: string;
  previousClose: string;
  change: string;
  changePercent: string;
};

const fetchStockDetails = async (symbol: string): Promise<StockDetails> => {
  const response = await api.get("/query", {
    params: {
      function: "GLOBAL_QUOTE",
      symbol,
    },
  });

  const { "Global Quote": globalQuote } = response.data;

  return {
    symbol: globalQuote["01. symbol"],
    open: globalQuote["02. open"],
    high: globalQuote["03. high"],
    low: globalQuote["04. low"],
    price: globalQuote["05. price"],
    volume: globalQuote["06. volume"],
    latestTradingDay: globalQuote["07. latest trading day"],
    previousClose: globalQuote["08. previous close"],
    change: globalQuote["09. change"],
    changePercent: globalQuote["10. change percent"],
  };
};

export const useStockDetails = (symbol: string) => {
    return useQuery<StockDetails>({
      queryKey: ["stockDetails", symbol],
      queryFn: () => fetchStockDetails(symbol),
      enabled: Boolean(symbol),
    });
  };