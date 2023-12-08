import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function MainNavbar() {
  return (
    <Navbar >
        <Navbar.Brand href="#home" style={{marginLeft:"1rem"}}>BudgetWise</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Community</Nav.Link>
          <Nav.Link href="#pricing">FAQS</Nav.Link>
        </Nav>
        <Nav.Link href="#pricing">John Doe</Nav.Link>
    </Navbar>
  );
}
