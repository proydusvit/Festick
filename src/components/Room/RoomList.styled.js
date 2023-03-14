import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  
 
  @media screen and (min-width:768px) and (max-width:1279px){
 width: 768px;
 }
   @media screen and (min-width:1280px) {
     width: 1240px;
 }
`;

export const UserCardList = styled.ul`
 display: grid;
 grid-gap: 30px;
 
   @media screen and (min-width:768px) and (max-width:1279px){
      display: grid;
    grid-template-columns: repeat(2, minmax(200px, 2fr));
  grid-gap: 30px;
 }
   @media screen and (min-width:1280px) {
   display: grid;
  grid-template-columns: repeat(auto-fill, minmax(365px, 1fr));
  grid-gap: 30px;
 }
`;