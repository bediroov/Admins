import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

// import image from "../assets/img/logo-dark.svg"
 
 const  Header=() =>{
  return (
<>


<Navbar bg="white" expand="lg">
      <Container>


        <Navbar.Brand   href="#home"><i class="fa-solid fa-bars"></i></Navbar.Brand>
        <Nav.Link href="#home">Menu</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
 
               


        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
           
       <LinkContainer to="/">   <Nav.Link >Home</Nav.Link></LinkContainer>
         <LinkContainer to="/about"> <Nav.Link >About</Nav.Link></LinkContainer>

          <LinkContainer to="/blogs"><Nav.Link >Blogs</Nav.Link></LinkContainer>

           <div className="logo">
           {/* <img src={image} alt="" /> */}
           </div>
       
          </Nav>

          <div className='d-flex justify-content-evenly'>
           <i className="fa-solid fa-user ms-3"></i>
           <i className="fa-solid fa-magnifying-glass ms-3"></i>
           <i className="fa-solid fa-cart-shopping ms-3"></i>

           </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
</>

  );
}

export default Header;