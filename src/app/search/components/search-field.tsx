"use client";

interface SearchFieldProps {
  searchText: string;
  onChange: (value: string) => void;
}

export default function SearchField({ searchText, onChange }: SearchFieldProps) {
  return (
    <input
      type="text"
      placeholder="Enter stock name or symbol..."
      value={searchText}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded"
    />
  );
}
