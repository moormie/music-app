import { FC } from "react";
import { Navbar, Container, Nav, Form, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { ROUTES_FAVORITES, ROUTES_HOME } from "../../App";
import { useSearchContext } from "../../contexts/SearchContext";

const orderTypes: { [key: string]: string } = {
  artist: "Artist Name",
  name: "Album Title",
  priceAmount: "Price Lowest",
  releaseDate: "Release date",
};

export const NavBar: FC = () => {
  const { searchedValue, searchHandler, orderValue, orderHandler } =
    useSearchContext();

  const location = useLocation();
  const { pathname: currentPath } = location;

  const getClassName = (path: string) => {
    return path === currentPath
      ? "text-decoration-none link-light fw-bold"
      : "text-decoration-none link-secondary";
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand>
          <b>VS music</b>
        </Navbar.Brand>
        <Nav className="flex-grow-1 flex-row">
          <Nav.Item className="me-2 me-lg-3">
            <Link className={getClassName(ROUTES_HOME)} to={ROUTES_HOME}>
              Home
            </Link>
          </Nav.Item>
          <Nav.Item className="me-2 me-lg-3">
            <Link
              className={getClassName(ROUTES_FAVORITES)}
              to={ROUTES_FAVORITES}>
              Favorites
            </Link>
          </Nav.Item>
        </Nav>
        {currentPath === ROUTES_HOME && (
          <>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mb-2"/>
            <Navbar.Collapse>
              <Nav className="flex-grow-1 me-3">
                <Form.Control
                  type="search"
                  placeholder="Search artist or album"
                  aria-label="Search"
                  value={searchedValue}
                  onChange={(e) => searchHandler(e.target.value)}
                />
              </Nav>
              <Nav>
                <NavDropdown
                  title={orderValue ? orderTypes[orderValue] : "Order By"}
                  onSelect={(e) => orderHandler(e)}
                  menuVariant="dark"
                  align="end"
                  className="text-center">
                  {Object.keys(orderTypes).map((type) => (
                    <NavDropdown.Item eventKey={type} key={type}>
                      {orderTypes[type]}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
};
