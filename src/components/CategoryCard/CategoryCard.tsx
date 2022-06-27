import { FC } from "react";
import "./styles.css";
import { Card } from "react-bootstrap";

interface CategoryCardProps {
  onSelectCategory: () => void;
  imageUrl: string;
  category: string;
  selected: boolean;
}

export const CategoryCard: FC<CategoryCardProps> = ({
  category,
  onSelectCategory,
  imageUrl,
  selected,
}) => {
  return (
    <Card
      onClick={onSelectCategory}
      className="category-card flex-row align-items-center"
      border={selected ? "dark" : "light"}
      bg={selected ? "dark" : "light"}
      text={selected ? "white" : "dark"}>
      <Card.Img src={imageUrl} alt="Card image" className="category-card-img" />
      <Card.Subtitle className="category-card-title text-center w-100 text-truncate">
        <b>{category}</b>
      </Card.Subtitle>
    </Card>
  );
};
