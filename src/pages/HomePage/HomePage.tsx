import { FC, useEffect, useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AlbumCardList } from "../../components/AlbumCardList";
import { CategoryCardList } from "../../components/CategoryCardList";
import { LoadingIndicator } from "../../components/LoadingIndicator";
import { useAlbumListContext } from "../../contexts/AlbumListContext";
import { getFilteredAlbumList } from "../../helpers/filterAlbumList";
import { getSortedAlbumList } from "../../helpers/sortingAlbumList";
import { AlbumData } from "../../types/AlbumData";

import { RootState } from "../../store/index";
import { useAppSelector } from "../../hooks/hooks";

export const HomePage: FC = () => {
  const { albumList, categoryList, loading } = useAlbumListContext();
  const { value: orderValue } = useAppSelector(
    (state: RootState) => state.sort
  );
  const { value: searchedValue } = useAppSelector(
    (state: RootState) => state.search
  );

  const [filteredAlbums, setFilteredAlbums] = useState<AlbumData[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    const filteredList = getFilteredAlbumList(
      searchedValue,
      selectedCategories,
      albumList
    );
    setFilteredAlbums(
      getSortedAlbumList(orderValue as keyof AlbumData, filteredList)
    );
  }, [searchedValue, albumList, selectedCategories, orderValue]);

  const onSelectCategory = useCallback(
    (category: string | undefined) => {
      if (category) {
        if (selectedCategories.includes(category)) {
          const updatedList = [...selectedCategories];
          updatedList.splice(updatedList.indexOf(category), 1);
          setSelectedCategories(updatedList);
        } else {
          setSelectedCategories([...selectedCategories, category]);
        }
      } else {
        setSelectedCategories([]);
      }
    },
    [selectedCategories]
  );

  return loading ? (
    <LoadingIndicator />
  ) : (
    <Container className="bg-light mw-100 mt-5 pt-4 min-vh-100">
      <Container className="pb-3">
        <Row className="align-items-center">
          <Col>
            <small>ALBUMS</small>
            <h1>
              <b>TOP 100</b>
            </h1>
          </Col>
        </Row>
      </Container>
      <Container className="mb-3 px-0">
        <CategoryCardList
          albumList={albumList}
          categoryList={categoryList}
          selectedCategories={selectedCategories}
          onSelectCategory={onSelectCategory}
        />
        <AlbumCardList
          albumList={filteredAlbums}
          title="Browse All"
          subtitle={
            filteredAlbums.length === 0
              ? "Sorry we did not find any result..."
              : selectedCategories.length > 0
              ? selectedCategories.join(" • ")
              : "Popular TOP 100 Albums"
          }
        />
      </Container>
    </Container>
  );
};
