"use client";

import { useMemo } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { useStockChartData } from "@/app/stock-details/api/get-stock-chart-data";

interface StockChartProps {
  symbol: string;
}

export default function StockChart({ symbol }: StockChartProps) {
  const { data: chartData, isLoading, isError } = useStockChartData(symbol);

  const xLabels = useMemo(() => chartData?.map((item) => item.date) || [], [chartData]);
  const closingPrices = useMemo(() => chartData?.map((item) => item.closingPrice) || [], [chartData]);

  if (isLoading) {
    return <p>Loading stock chart...</p>;
  }

  if (isError) {
    return <p>Error loading stock chart. Please try again later.</p>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded shadow-md h-72 sm:h-96 lg:h-[500px]">
      <h2 className="text-2xl font-bold mb-4 text-center">Stock Price Chart for {symbol}</h2>
      <LineChart
        series={[
          {
            data: closingPrices, // Data for the y-axis
            label: "Price", // Label for the series
          },
        ]}
        xAxis={[
          {
            scaleType: "point", // As in the example
            data: xLabels, // Labels for the x-axis
          },
        ]}
      />
    </div>
  );
}
