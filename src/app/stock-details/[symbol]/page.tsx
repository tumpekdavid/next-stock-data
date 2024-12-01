"use client";

import { useParams } from "next/navigation";
import { useStockDetails } from "@/app/stock-details/api/get-stock-details";
import StockChart from "@/app/stock-details/components/stock-chart";

export default function DetailPage() {
  const { symbol } = useParams();

  const { data: stockDetails, isLoading, isError } = useStockDetails(symbol as string);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg font-semibold">Loading stock details...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-red-500">Error fetching stock details. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 flex flex-col items-center">
      <div className="bg-white p-6 rounded shadow-md max-w-4xl w-full mb-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Stock Details for <span className="text-blue-600">{symbol}</span>
        </h1>
        {stockDetails && (
          <div className="flex flex-col lg:flex-row justify-evenly">
            {/* Left Column */}
            <div>
              <p className="text-lg">Current Price: <span className="font-semibold">${stockDetails.price}</span></p>
              <p className="text-lg">Open: <span className="font-semibold">${stockDetails.open}</span></p>
              <p className="text-lg">High: <span className="font-semibold">${stockDetails.high}</span></p>
              <p className="text-lg">Low: <span className="font-semibold">${stockDetails.low}</span></p>
            </div>
            {/* Right Column */}
            <div>
              <p className="text-lg">Volume: <span className="font-semibold">{stockDetails.volume}</span></p>
              <p className="text-lg">Latest Trading Day: <span className="font-semibold">{stockDetails.latestTradingDay}</span></p>
              <p className="text-lg">Previous Close: <span className="font-semibold">${stockDetails.previousClose}</span></p>
              <p className="text-lg">Change: <span className="font-semibold">{stockDetails.change}</span></p>
              <p className="text-lg">Change Percent: <span className="font-semibold">{stockDetails.changePercent}</span></p>
            </div>
          </div>
        )}
      </div>
      {/* Stock Chart Section */}
      <StockChart symbol={symbol as string} />
    </div>
  );
}
