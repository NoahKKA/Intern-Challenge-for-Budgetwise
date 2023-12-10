import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function MainNavbar() {
  return (
    <Navbar className="custom-navbar">
        <Navbar.Brand href="#home" style={{marginLeft:"4rem", fontWeight: "bold", marginRight: '7rem'}} className="navbar-custom-text">BudgetWise</Navbar.Brand>
        <Nav className="me-auto" >
          <Nav.Link href="#home" className="navbar-custom-text ml-auto">Home</Nav.Link>
          <Nav.Link href="#features"className="navbar-custom-text">Community</Nav.Link>
          <Nav.Link href="#pricing" className="navbar-custom-text">FAQS</Nav.Link>
        </Nav>
        <Nav.Link href="#pricing" className="navbar-custom-text" style={{marginRight: '2rem', fontWeight: "bold"}}>John Doe</Nav.Link>
    </Navbar>
  );
}
