import { getFilteredAlbumList } from "../helpers/filterAlbumList";
import { albumListMock } from "./mockAlbumList";

describe("filtering album list", () => {
  it("shows all albums if no searched value and no selected categories", () => {
     expect(getFilteredAlbumList("", [], albumListMock).length).toBe(3);
  });
  it("shows 2 albums if searched value is 'to' and no selected categories", () => {
     expect(getFilteredAlbumList("to", [], albumListMock).length).toBe(2);
  });
  it("shows 2 albums if no searched value and selected category is 'Soundtrack' ", () => {
     expect(getFilteredAlbumList("", ['Soundtrack'], albumListMock).length).toBe(2);
  });
  it("shows only 1 album if searched value is 'a' and selected category is 'Soundtrack' ", () => {
     expect(getFilteredAlbumList("to", ['Soundtrack'], albumListMock).length).toBe(1);
  });
});
