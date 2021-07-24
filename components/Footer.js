import {Container, Navbar, Nav, NavDropdown, Image, Badge} from 'react-bootstrap'
import Link from 'next/link'
import {ActiveLink} from "./ActiveLink";

export const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">© 2021 GhostSlayer. All Rights Reserved.</span>
      </div>
    </footer>
  )
}
