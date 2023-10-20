import { Container, Navbar, NavbarBrand } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="bg-light mb-5 shadow">
      <Container>
        <NavbarBrand>Task Mamagement Application</NavbarBrand>
      </Container>
    </Navbar>
  );
};

export default Header;
