import { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AlbumCard } from "../../components/AlbumCard";
import { AlbumData } from "../../types/AlbumData";

interface AlbumCardListProps {
  albumList: AlbumData[];
  title?: string;
  subtitle?: string;
}

export const AlbumCardList: FC<AlbumCardListProps> = ({
  albumList,
  title,
  subtitle,
}) => {
  return (
    <Container>
      {title && (
        <Row className="my-2">
          <Col as="h3">{title}</Col>
        </Row>
      )}
      <Row>
        <Col as="p">{subtitle}</Col>
      </Row>
      <Row>
        {albumList.map((album) => (
          <Col
            key={album.id}
            lg={2}
            md={3}
            sm={6}
            xs={6}
            className="mb-3 d-flex justify-content-center">
            <AlbumCard album={album} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
