import { getSortedAlbumList } from "../helpers/sortingAlbumList";
import { albumListMock } from "./mockAlbumList";

describe("sorting album list", () => {
  test("by artist", () => {
     expect(getSortedAlbumList("artist", albumListMock)[0]).toEqual(albumListMock[1]);
  });
  test("by name", () => {
     expect(getSortedAlbumList("name", albumListMock)[0]).toEqual(albumListMock[0]);
  });
  test("by priceAmount", () => {
     expect(getSortedAlbumList("priceAmount", albumListMock)[0]).toEqual(albumListMock[2]);
  });
  test("by release date", () => {
     expect(getSortedAlbumList("releaseDate", albumListMock)[0]).toEqual(albumListMock[1]);
  });
  test("by default", () => {
     expect(getSortedAlbumList("id", albumListMock)[0]).toEqual(albumListMock[0]);
  });
});
