export const Geo_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
export const GeoAPIOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_GEO_API_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
