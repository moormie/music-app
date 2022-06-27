import { FC } from "react";
import { Modal, Row, Col, Container, Dropdown } from "react-bootstrap";
import { BsHeartFill, BsHeart, BsThreeDots } from "react-icons/bs";
import "./styles.css";

interface ModalFooterProps {
  isFavorite: boolean;
  onSetFavorite: () => void;
  artistLink: string;
  albumLink: string;
}

export const ModalFooter: FC<ModalFooterProps> = ({
  isFavorite,
  onSetFavorite,
  artistLink,
  albumLink,
}) => {
  return (
    <Modal.Footer>
      <Container>
        <Row className="align-items-center">
          <Col>
            {isFavorite ? (
              <BsHeartFill
                className="heart-icon"
                size={24}
                onClick={onSetFavorite}
              />
            ) : (
              <BsHeart
                className="heart-icon"
                size={24}
                onClick={onSetFavorite}
              />
            )}
          </Col>
          <Col xs="auto">
            <Dropdown align="end">
              <Dropdown.Toggle
                variant="outline-secondary"
                className="more-button">
                <BsThreeDots size={24} />
                <b>More</b>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href={artistLink} target="_blank">
                  About the Artist
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href={albumLink} target="_blank">
                  About the Album
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </Modal.Footer>
  );
};
