import { FC } from "react";
import { Container, Spinner } from "react-bootstrap";

export const LoadingIndicator: FC = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100">
      <Spinner animation="border" role="status" />
    </Container>
  );
};
