import { api } from "@/lib/api-client";
import { useQuery } from "@tanstack/react-query";
import { MonthlyAdjustedTimeSeries, StockChartApiResponse } from "@/types/api";

export type StockChartDataPoint = {
  date: string;
  closingPrice: number;
};

export const fetchStockChartData = async (symbol: string, months: number = 12): Promise<StockChartDataPoint[]> => {
  const response = await api.get<StockChartApiResponse>("/query", {
    params: {
      function: "TIME_SERIES_MONTHLY_ADJUSTED",
      symbol,
    },
  });

  const timeSeries = response.data["Monthly Adjusted Time Series"];

  if (!timeSeries) {
    throw new Error("No data found for stock chart.");
  }

  return getLastMonthsAsChartData(timeSeries, months);
};

export const useStockChartData = (symbol: string) => {
  return useQuery<StockChartDataPoint[]>({
    queryKey: ["stockChartData", symbol],
    queryFn: () => fetchStockChartData(symbol),
    enabled: Boolean(symbol),
  });
};

function getLastMonthsAsChartData(timeSeries: MonthlyAdjustedTimeSeries, months: number): StockChartDataPoint[] {
  return Object.keys(timeSeries)
    .slice(0, months)
    .reverse()
    .map((date) => ({
      date,
      closingPrice: parseFloat(timeSeries[date]["4. close"]),
    }));
}
