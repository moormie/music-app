import { FC } from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { ROUTES_HOME } from "../../App";
import { AlbumCardList } from "../../components/AlbumCardList";
import { useFavoriteAlbumListContext } from "../../contexts/FavoriteAlbumListContext";

export const FavoritesPage: FC = () => {
  const { favoriteAlbumList } = useFavoriteAlbumListContext();

  const history = useHistory();

  const goToHomePage = () => {
    history.push(ROUTES_HOME);
  };

  return (
    <Container className="mt-5 pt-5 bg-light mw-100 min-vh-100">
      <AlbumCardList
        albumList={favoriteAlbumList}
        title={
          favoriteAlbumList.length > 0
            ? "Favorite albums"
            : "No favorite albums yet"
        }
        subtitle="Albums you have liked will show up here"
      />
      {favoriteAlbumList.length === 0 && (
        <Container>
          <Button variant="outline-secondary" onClick={goToHomePage}>
            Search for Albums
          </Button>
        </Container>
      )}
    </Container>
  );
};
