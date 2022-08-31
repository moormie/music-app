export type OrderKey = "artist" | "name" | "priceAmount" | "releaseDate";

type OrderValue = string;

export const orderTypes: Record<OrderKey, OrderValue> = {
  artist: "Artist Name",
  name: "Album Title",
  priceAmount: "Price Lowest",
  releaseDate: "Release date",
};
