import moment from "moment";
import { AlbumData } from "../types/AlbumData";

export const getSortedAlbumList = (
  key: keyof AlbumData,
  albumList: AlbumData[],
) => {
  switch (key) {
    case "artist":
    case "name": {
      return [...albumList].sort((a, b) => a[key].localeCompare(b[key]));
    }
    case "priceAmount": {
      return [...albumList].sort((a, b) => a[key] - b[key]);
    }
    case "releaseDate": {
      return [...albumList].sort(
        (a, b) => moment(b[key]).unix() - moment(a[key]).unix(),
      );
    }
    default: {
      return albumList;
    }
  }
};
