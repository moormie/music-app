import { FC, useMemo, useState } from "react";
import "./styles.css";
import { Card, Col, Row } from "react-bootstrap";
import { AlbumData } from "../../types/AlbumData";
import { BsHeart, BsThreeDots, BsHeartFill } from "react-icons/bs";
import { useFavoriteAlbumListContext } from "../../contexts/FavoriteAlbumListContext";
import { AlbumDetailModal } from "../AlbumDetailModal";

interface AlbumCardProps {
  album: AlbumData;
}

export const AlbumCard: FC<AlbumCardProps> = ({ album }) => {
  const { favoriteAlbumList, onSetFavorite } = useFavoriteAlbumListContext();

  const [selectedAlbum, setSelectedAlbum] = useState<AlbumData>();

  const onSelectAlbum = (selected: AlbumData) => {
    setSelectedAlbum(selected);
  };

  const onClose = () => {
    setSelectedAlbum(undefined);
  };

  const isFavorite = useMemo(
    () => (favoriteAlbumList.find((a) => a.id === album.id) ? true : false),
    [favoriteAlbumList, album.id],
  );

  return (
    <>
      <Card className="album-card">
        <Card.Body className="p-2">
          <Card.Title className="fs-6 text-truncate">{album.name}</Card.Title>
          <Card.Subtitle className="fw-light text-truncate">
            {album.artist}
          </Card.Subtitle>
        </Card.Body>
        <Card.Img
          variant="top"
          src={album.imageUrl}
          className="album-image"
          onClick={() => onSelectAlbum(album)}
        />
        <Card.Footer className="text-muted">
          <Row className="d-flex justify-content-between align-items-end">
            <Col>
              {isFavorite ? (
                <BsHeartFill
                  className="album-icon"
                  onClick={() => onSetFavorite(album.id)}
                />
              ) : (
                <BsHeart
                  className="album-icon"
                  onClick={() => onSetFavorite(album.id)}
                />
              )}
            </Col>
            <Col xs="auto">
              <BsThreeDots onClick={() => onSelectAlbum(album)} />
            </Col>
          </Row>
        </Card.Footer>
      </Card>
      {selectedAlbum && (
        <AlbumDetailModal
          album={selectedAlbum}
          handleClose={onClose}
          isFavorite={isFavorite}
          onSetFavorite={onSetFavorite}
        />
      )}
    </>
  );
};
