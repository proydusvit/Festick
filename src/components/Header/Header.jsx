import Container from 'react-bootstrap/Container';
import {  NavsLink, NavsLogo } from './Header.style';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'

export const Header = () => {

  return (
   
<header>
    <Navbar expand="lg">
      <Container fluid>
          <LinkContainer to="/"><NavsLogo>Фестивальний 3.0</NavsLogo></LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         
              <LinkContainer to="/service"><NavsLink>Послуги оренди</NavsLink></LinkContainer>
              <LinkContainer to="/rules"><NavsLink>Правила і умови</NavsLink></LinkContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</header>

  
   
  );
};