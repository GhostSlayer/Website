import { Container, Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'
import Link from 'next/link'
import {ActiveLink} from "./ActiveLink";

export const NavbarComponent = () => {
    return (
        <Navbar variant="dark" expand="md" style={{ marginBottom: '30px' }}>
            <Container>
                <Link href="/" shallow passHref>
                    <Image src="https://gravatar.com/avatar/a9f4c0a25cb3fe768423187eac48b40d?s=512" className="nav-img" alt={"Drivet"} width={30} />
                </Link>
                <Link href="/" shallow passHref>
                    <Navbar.Brand href="#home">GhostSlayer</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <ActiveLink activeClassName="active" href="/">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" href="/about">
                        <Nav.Link href="/about">About Me</Nav.Link>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" href="/projects">
                        <Nav.Link href="/projects">Projects</Nav.Link>
                    </ActiveLink>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://status.ghostslayer.tk" target="_blank">Service Status</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
  }
  