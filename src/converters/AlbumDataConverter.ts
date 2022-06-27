import { AlbumData } from "../types/AlbumData";
import { ITunesData } from "../types/ITunesData";

export const albumDataConverter = (iTunesData: ITunesData) => {
  const { feed } = iTunesData;
  const { entry = [] } = feed;

  const convertedEntry: AlbumData[] = entry.map((e) => ({
    id: e.id.attributes?.["im:id"]!,
    name: e["im:name"].label,
    imageUrl:
      e["im:image"].find((image) => image.attributes?.height === "170")
        ?.label ?? "",
    price: e["im:price"].label,
    priceAmount: e["im:price"].attributes?.amount
      ? parseFloat(e["im:price"].attributes?.amount)
      : 0,
    rights: e.rights.label,
    title: e.title.label,
    albumLink: e.link.attributes?.href ?? "",
    artistLink: e["im:artist"].attributes?.href ?? "",
    artist: e["im:artist"].label,
    releaseDate: e["im:releaseDate"].label,
    category: e.category.attributes.label ?? "",
    nrOfSongs: e["im:itemCount"].label,
  }));

  return convertedEntry;
};
