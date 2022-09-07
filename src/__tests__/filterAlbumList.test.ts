import { getFilteredAlbumList } from "../helpers/filterAlbumList";
import { albumListMock } from "./mockAlbumList";

describe("filtering album list", () => {
  test("show all albums if no searched value and no selected categories", () => {
     expect(getFilteredAlbumList("", [], albumListMock).length).toBe(3);
  });
  test("show 2 albums if no searched value is 'to' and no selected categories", () => {
     expect(getFilteredAlbumList("to", [], albumListMock).length).toBe(2);
  });
  test("show 2 albums if no searched value and selected category is 'Soundtrack' ", () => {
     expect(getFilteredAlbumList("", ['Soundtrack'], albumListMock).length).toBe(2);
  });
  test("show only 1 album if searched value is 'a' and selected category is 'Soundtrack' ", () => {
     expect(getFilteredAlbumList("to", ['Soundtrack'], albumListMock).length).toBe(1);
  });
});
