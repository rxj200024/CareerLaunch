import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import rocketImg from "../images/rocket-launch-spacecraft-logo-clip-art-rocket-d1c9092035f7d34d39884c0d997b62c4.png"
import "../styles.css"
import { Nav, NavDropdown } from 'react-bootstrap';

const NavBar = () => {

  const [selectedLink, setSelectedLink] = useState('/');

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div>
      <Navbar className='navBar' data-bs-theme="dark" >
        <Container>
        <Navbar.Brand href="#home">
            <img
              src= {rocketImg}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="/">Career Launch</Navbar.Brand>
          <Nav className="me-auto ">

              <NavDropdown title="Job Board" id="collapsible-nav-dropdown">
              <Nav.Link 
              active={selectedLink === '/createjobpost'}
              onClick={() => handleLinkClick('/createjobpost')}
            >
              <NavDropdown.Item><Link to="/createjobpost"  style={{ color: selectedLink === '/createjobpost' ? 'white' : 'grey' }}>Create Job Post</Link></NavDropdown.Item>
              </Nav.Link>
              <Nav.Link 
              active={selectedLink === '/'}
              onClick={() => handleLinkClick('/')}>
                <NavDropdown.Item><Link to="/" style={{ color: selectedLink === '/' ? 'white' : 'grey' }}>View Job Board</Link></NavDropdown.Item>
              </Nav.Link>
              </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
