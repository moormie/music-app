import { AlbumData } from "../types/AlbumData";

export const getFilteredAlbumList = (
  searchedValue: string,
  selectedCategories: string[],
  albumList: AlbumData[],
) => {
  const isSelectedCategories = selectedCategories.length > 0;
  const isSearchedValue = searchedValue.length > 0;

  if (isSelectedCategories && isSearchedValue) {
    return filterByCategories(
      selectedCategories,
      filterBySearchedValue(searchedValue, albumList),
    );
  } else if (isSelectedCategories && !isSearchedValue) {
    return filterByCategories(selectedCategories, albumList);
  } else if (!isSelectedCategories && isSearchedValue) {
    return filterBySearchedValue(searchedValue, albumList);
  } else {
    return albumList;
  }
};

const filterByCategories = (
  selectedCategories: string[],
  albumList: AlbumData[],
) => {
  return albumList.filter((album) =>
    selectedCategories.includes(album.category),
  );
};

const filterBySearchedValue = (
  searchedValue: string,
  albumList: AlbumData[],
) => {
  return albumList.filter((album) =>
    album.title.toLocaleLowerCase().includes(searchedValue.toLocaleLowerCase()),
  );
};
