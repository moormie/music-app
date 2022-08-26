import { FC } from "react";
import { Navbar, Container, Nav, Form, NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { ROUTES_FAVORITES, ROUTES_HOME } from "../../App";
import { RootState } from "../../store";
import { searchActions } from "../../store/search";
import { sortActions } from "../../store/sort";
import { OrderKey, orderTypes } from "../../types/OrderTypes";

export const NavBar: FC = () => {
  const dispatch = useDispatch();

  const { value: orderValue } = useSelector((state: RootState) => state.sort);
  const { value: searchedValue } = useSelector(
    (state: RootState) => state.search
  );

  const searchHandler = (value: string) => {
    dispatch(searchActions.search(value));
  };

  const orderHandler = (value: string | null) => {
    dispatch(sortActions.sort(value as OrderKey));
  };

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
              to={ROUTES_FAVORITES}
            >
              Favorites
            </Link>
          </Nav.Item>
        </Nav>
        {currentPath === ROUTES_HOME && (
          <>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="mb-2"
            />
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
                  title={orderValue ? orderTypes[orderValue as OrderKey] : "Order By"}
                  onSelect={(e) => orderHandler(e)}
                  menuVariant="dark"
                  align="end"
                  className="text-center"
                >
                  {Object.keys(orderTypes).map((type) => (
                    <NavDropdown.Item eventKey={type} key={type}>
                      {orderTypes[type as OrderKey]}
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
