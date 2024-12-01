"use client";

import { useParams } from "next/navigation";
import StockDetails from "@/app/stock-details/components/stock-details";
import StockChart from "@/app/stock-details/components/stock-chart";

export default function DetailPage() {
  const { symbol } = useParams();

  return (
    <div className="p-6 bg-gray-100 flex flex-col items-center">
      <StockDetails symbol={symbol as string} />
      <StockChart symbol={symbol as string} />
    </div>
  );
}
