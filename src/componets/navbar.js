import { NavDropdown } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function MainNavbar() {
  return (
    <Navbar className="custom-navbar">
        <Navbar.Brand href="#home" style={{marginLeft:"4rem", fontWeight: "bold", marginRight: '7rem'}} className="navbar-custom-text">BudgetWise</Navbar.Brand>
        <Nav className="me-auto" >
          <Nav.Link href="#home" className="navbar-custom-text ml-auto">Home</Nav.Link>
          <Nav.Link href="#Community"className="navbar-custom-text">Community</Nav.Link>
          <Nav.Link href="#FAQS" className="navbar-custom-text">FAQS</Nav.Link>
        </Nav>
        <PersonFill style={{marginRight:'.5rem'}}/>
        <Nav.Link href="#profile" className="navbar-custom-text" style={{marginRight: '1rem', fontWeight: "bold"}}>John Doe</Nav.Link>
        <NavDropdown style={{marginRight: '3rem'}}></NavDropdown>
    </Navbar>
  );
}
