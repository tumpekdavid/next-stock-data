export type StockSuggestion = {
    symbol: string;
    name: string;
    type: string;
    region: string;
    marketOpen: string;
    marketClose: string;
    timezone: string;
    currency: string;
    matchScore: string;
  };

  export type StockSuggestionsResponse = {
    bestMatches: StockSuggestion[];
  };