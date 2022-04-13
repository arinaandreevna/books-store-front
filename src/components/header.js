import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"


import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import "./header.css";

const Header = () => {
    const { pathname } = useLocation();
    return (
        <Navbar bg="light" expand="sm">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img id="logo" src={logo} />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link as={Link} to="/" disabled={pathname === "/"}>
                            ГЛАВНАЯ
                        </Nav.Link>
                        <Nav.Link as={Link} to="/catalog" disabled={pathname === "/catalog"}>
                            КАТАЛОГ
                        </Nav.Link>
                        <Nav.Link as={Link} to="/collections" disabled={pathname === "/collections"}>
                            ПОДБОРКИ
                        </Nav.Link>
                        <NavDropdown title="О НАС">
                            <NavDropdown.Item href="/about/privacy">
                                Политика конфиденциальности
                            </NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Поиск"
                                className="me-2"
                                aria-label="Поиск"
                            />
                            <Button variant="outline-success">Поиск</Button>
                        </Form>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;