export type OrderKey = "artist" | "name" | "priceAmount" | "releaseDate";

export const orderTypes: Record<OrderKey, string> = {
  artist: "Artist Name",
  name: "Album Title",
  priceAmount: "Price Lowest",
  releaseDate: "Release date",
};