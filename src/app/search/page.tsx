"use client";

import { useState } from "react";
import { useStockSuggestions } from "@/app/search/api/get-stock-search-suggestions";
import { useDebounce } from "@/hooks/use-debounce";
import SearchField from "@/app/search/components/search-field";
import SearchResults from "@/app/search/components/search-results";

export default function SearchPage() {
  const [keywords, setKeywords] = useState("");
  const debouncedKeywords = useDebounce(keywords, 1000);
  const { data: suggestions, isLoading, isError } = useStockSuggestions(debouncedKeywords);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Search for Stocks</h1>
      <div className="mb-6">
        <SearchField searchText={keywords} onChange={setKeywords} />
      </div>
      <SearchResults suggestions={suggestions} isLoading={isLoading} isError={isError} />
    </div>
  );
}
