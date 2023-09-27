import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { routes } from "../config/route";
import { useSelector } from "react-redux";

function Header() {
    const dataUser = useSelector((state) => state.user.listUsers);
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href={routes.home}>{dataUser.length}</Nav.Link>
                            <Nav.Link href="#link">User</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                {dataUser &&
                                    dataUser.length > 0 &&
                                    dataUser.map((user, index) => {
                                        return (
                                            <NavDropdown.Item key={index} href="#">
                                                {user.email}
                                            </NavDropdown.Item>
                                        );
                                    })}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
