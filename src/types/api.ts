export type StockSuggestion = {
    symbol: string;
    name: string;
  };

export type BestMatch = {
    "1. symbol": string;
    "2. name": string;
    "3. type": string;
    "4. region": string;
    "5. marketOpen": string;
    "6. marketClose": string;
    "7. timezone": string;
    "8. currency": string;
    "9. matchScore": string;
  };
  
export type StockSuggestionsApiResponse = {
    bestMatches: BestMatch[];
  };

export type GlobalQuote = {
    "01. symbol": string;
    "02. open": string;
    "03. high": string;
    "04. low": string;
    "05. price": string;
    "06. volume": string;
    "07. latest trading day": string;
    "08. previous close": string;
    "09. change": string;
    "10. change percent": string;
  };
  
export type GlobalQuoteApiResponse = {
    "Global Quote": GlobalQuote;
  };

export type MonthlyAdjustedTimeSeries = {
    [date: string]: {
      "1. open": string;
      "2. high": string;
      "3. low": string;
      "4. close": string;
      "5. adjusted close": string;
      "6. volume": string;
      "7. dividend amount": string;
    };
  };

export type StockChartApiResponse = {
    "Meta Data": {
      "1. Information": string;
      "2. Symbol": string;
      "3. Last Refreshed": string;
      "4. Time Zone": string;
    };
    "Monthly Adjusted Time Series": MonthlyAdjustedTimeSeries;
  };
