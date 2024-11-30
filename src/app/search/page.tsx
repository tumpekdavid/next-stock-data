"use client"

import { useState } from "react";
import { useStockSuggestions } from "@/app/search/api/get-stock-search-suggestions";

function SearchPage() {
  const [keywords, setKeywords] = useState(""); // State to hold search input
  const { data: suggestions, isLoading, isError, error } = useStockSuggestions(keywords); // React Query hook

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Search for Stocks</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Enter stock name or symbol..."
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)} // Update keywords state on input change
          className="w-full p-3 border border-gray-300 rounded"
        />
      </div>
      {isLoading && <p>Loading suggestions...</p>}
      {isError && <p className="text-red-500">Error: {(error as Error).message}</p>}
      {suggestions && suggestions.length > 0 && (
        <ul className="bg-white border border-gray-300 rounded shadow-md">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.symbol}
              className="p-3 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
            >
              {suggestion.name} ({suggestion.symbol})
            </li>
          ))}
        </ul>
      )}
      {suggestions && suggestions.length === 0 && keywords && !isLoading && (
        <p className="text-gray-500">No results found.</p>
      )}
    </div>
  );
}

export default SearchPage;
