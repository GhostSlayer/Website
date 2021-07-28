import {Container, Navbar, Nav, NavDropdown, Image, Badge} from 'react-bootstrap'
import {ActiveLink} from "./ActiveLink";

export const NavbarComponent = () => {
    return (
        <Navbar variant="dark" expand="md" style={{ marginBottom: '30px' }}>
            <Container>
                <Image src="https://gravatar.com/avatar/a9f4c0a25cb3fe768423187eac48b40d?s=512" className="nav-img" alt={"Drivet"} width={30} />
                <Navbar.Brand href="/">GhostSlayer</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <ActiveLink activeClassName="active" href="/">
                        <Nav.Link href="/">Home</Nav.Link>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" href="/about">
                        <Nav.Link href="/about">About Me</Nav.Link>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" href="/projects">
                        <Nav.Link href="/projects">Projects</Nav.Link>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" href="/blog">
                        <Nav.Link href="/blog">Blog</Nav.Link>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" href="/contact">
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </ActiveLink>
                    <NavDropdown title="More" id="basic-nav-dropdown">
                        <NavDropdown.Item href="//discord.gg/NQuuQqeP7j" target="_blank">Join my Discord</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="https://status.ghostslayer.tk" target="_blank">Service Status</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
  }
  