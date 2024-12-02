import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">Next Stock Analyzer</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your go-to platform for stock analysis and insights.
        </p>
        <Link
          href="/search"
          className="bg-blue-600 text-white font-medium py-2 px-4 rounded shadow hover:bg-blue-500 transition"
        >
          Search for a Stock
        </Link>
      </div>
    </div>
  );
}
