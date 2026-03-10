const API_KEY = import.meta.env.VITE_ALPHA_VANTAGE_KEY;
const BASE_URL = "https://www.alphavantage.co/query?"

async function fetchJSON(queryParams){
  const url = `${BASE_URL} ${new URLSearchParams(
    {
      ...queryParams,
      apiKey: API_KEY,
    }
  )}`;

  const response = await fetch(url);

  if(!response.ok)
      throw new Error("AlphaVantage request failed");

  return response.json();
}