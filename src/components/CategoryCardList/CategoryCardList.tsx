import { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AlbumData } from "../../types/AlbumData";
import { CategoryCard } from "../CategoryCard";
import "./styles.css";

interface CategoryCardProps {
  categoryList: string[];
  onSelectCategory: (category: string | undefined) => void;
  albumList: AlbumData[];
  selectedCategories: string[];
}

export const CategoryCardList: FC<CategoryCardProps> = ({
  categoryList,
  onSelectCategory,
  albumList,
  selectedCategories,
}) => {
  return (
    <Container>
      <Row className="my-2 align-items-center">
        <Col xs="auto" as="h3">
          Categories
        </Col>
        {selectedCategories.length > 0 && (
          <Col>
            <small
              className="clear-all-text"
              onClick={() => onSelectCategory(undefined)}>
              Clear All
            </small>
          </Col>
        )}
      </Row>
      <Container className="px-0 category-card-container">
        <Row className="mb-3 category-card-row">
          {categoryList.map((category) => (
            <Col
              key={category}
              lg={2}
              md={3}
              sm={2}
              xs={2}
              className="my-2 d-flex justify-content-center">
              <CategoryCard
                category={category}
                onSelectCategory={() => onSelectCategory(category)}
                imageUrl={
                  albumList.find((album) => album.category === category)
                    ?.imageUrl ?? ""
                }
                selected={selectedCategories.includes(category)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};
