import styled from "styled-components";

import Nav from 'react-bootstrap/Nav';

export const NavsLink = styled(Nav.Link)`

 
 font-size:19px;
font-family: 'Prosto One', cursive;
    line-height: 1.17;

    letter-spacing: 0.02em;
  margin-right: 40px;
margin-right: 100px;
 @media screen and (max-width:768px) {

     margin-bottom: 10px;
    }
color: ${({ theme }) => theme.colors.background};
  :hover {
   color: ${({ theme }) => theme.colors.background};
  }
  :active{
   color: ${({ theme }) => theme.colors.background};
  }
  :last-child{
    margin-right: 0;
  }


`;
export const NavsLogo = styled(Nav.Link)`
font-family: 'Pacifico', cursive;

color: ${({ theme }) => theme.colors.background};
 font-size:36px;
padding: 0;
  margin: 10px 180px 10px 0; 
  @media screen and (max-width:768px) {
font-size:26px;
      margin:  0;
      margin-bottom: 10px;
    }
     :hover {
   color: ${({ theme }) => theme.colors.background};
  }
  :active{
   color: ${({ theme }) => theme.colors.background};
  }

`;