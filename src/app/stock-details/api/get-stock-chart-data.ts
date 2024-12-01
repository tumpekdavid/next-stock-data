import { api } from "@/lib/api-client";
import { useQuery } from "@tanstack/react-query";
import mockData from "./mockChartData.json";

export type StockChartDataPoint = {
  date: string; // Matches the example's key for x-axis labels
  closingPrice: number; // Matches the example's key for y-axis data
};

export const fetchStockChartData = async (symbol: string): Promise<StockChartDataPoint[]> => {
  // Uncomment the following lines to use live API instead of mock data
  // const response = await api.get("/query", {
  //   params: {
  //     function: "TIME_SERIES_MONTHLY_ADJUSTED",
  //     symbol,
  //   },
  // });

  // const timeSeries = response.data["Monthly Adjusted Time Series"];
  const timeSeries = mockData["Monthly Adjusted Time Series"];

  if (!timeSeries) {
    throw new Error("No data found for stock chart.");
  }

  return Object.keys(timeSeries)
    .slice(0, 12) // Get the last 12 months
    .reverse() // Reverse to show oldest first
    .map((date) => ({
      date: date, // Use 'name' for x-axis labels to match the example
      closingPrice: parseFloat(timeSeries[date]["4. close"]),
    }));
};

export const useStockChartData = (symbol: string) => {
  return useQuery<StockChartDataPoint[]>({
    queryKey: ["stockChartData", symbol],
    queryFn: () => fetchStockChartData(symbol),
    enabled: Boolean(symbol),
  });
};
