"use client";

import Link from "next/link";

interface Suggestion {
  symbol: string;
  name: string;
}

interface SearchResultsProps {
  suggestions: Suggestion[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

export default function SearchResults({ suggestions, isLoading, isError }: SearchResultsProps) {
  if (isLoading) {
    return <p>Loading suggestions...</p>;
  }

  if (isError) {
    return (
      <p className="text-red-500">
        An error happened while fetching the data. Please try again later.
      </p>
    );
  }

  if (suggestions && suggestions.length === 0) {
    return <p className="text-gray-500">No results found.</p>;
  }

  if (!suggestions){
    return null;
  }

  return (
    <ul className="bg-white border border-gray-300 rounded shadow-md">
      {suggestions?.map((suggestion) => (
        <li
          key={suggestion.symbol}
          className="p-3 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
        >
          <Link href={`/stock-details/${suggestion.symbol}`} className="text-blue-600 hover:underline">
            {suggestion.name} ({suggestion.symbol})
          </Link>
        </li>
      ))}
    </ul>
  );
}
