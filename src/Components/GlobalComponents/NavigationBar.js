import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <div>
      <Navbar
        bg="*"
        variant="dark"
        expand="lg"
        style={{ backgroundColor: "#171717" }}
      >
        <Container>
          <Navbar.Brand href="/">Moviepedia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/upload">Upload</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
