import moment from "moment";
import { FC } from "react";
import {
  Modal,
  Image,
  Row,
  Col,
  Container,
  Badge,
  CloseButton,
} from "react-bootstrap";
import { AlbumData } from "../../types/AlbumData";
import { ModalFooter } from "./ModalFooter";
import "./styles.css";

interface AlbumDetailModalProps {
  handleClose: () => void;
  album: AlbumData;
  isFavorite: boolean;
  onSetFavorite: (album: AlbumData) => void;
}

export const AlbumDetailModal: FC<AlbumDetailModalProps> = ({
  handleClose,
  album,
  isFavorite,
  onSetFavorite,
}) => {
  return (
    <Modal show onHide={handleClose} keyboard={false} centered>
      <div className="album-detail-modal-close-container" onClick={handleClose}>
        <CloseButton variant="white" />
      </div>
      <Image
        src={album.imageUrl.replaceAll("170x170", "600x600")}
        className="album-detail-modal-image"
      />
      <Modal.Body>
        <Container className="p-0">
          <Row>
            <Col>
              <h3>{album.name}</h3>
              <h5>{album.artist}</h5>
            </Col>
            <Col xs="auto">
              <h5>
                <Badge pill bg="secondary">
                  {album.price}
                </Badge>
              </h5>
            </Col>
          </Row>
        </Container>
        Album - {album.nrOfSongs} Songs
        <p>{moment(album.releaseDate).format("DD MMMM, YYYY")}</p>
        <small>{album.rights}</small>
      </Modal.Body>
      <ModalFooter
        isFavorite={isFavorite}
        onSetFavorite={() => onSetFavorite(album)}
        artistLink={album.artistLink}
        albumLink={album.albumLink}
      />
    </Modal>
  );
};
