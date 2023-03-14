import styled from "styled-components";

export const Img = styled.img`
border-radius: 30px;
margin-bottom: 10px;
 @media screen and (min-width:768px) and (max-width:1279px){
    height:300px;
 }
  @media screen  and (min-width:1280px){
 
    height:450px;
   
 }
  
`;
export const TitleDetalis = styled.h1`
text-align: center;
margin-bottom: 30px;
color: #f8abeb;
  font-size:30px;
   font-weight: 500;
    line-height: 1.17;
    font-family: 'Prosto One', cursive;
    letter-spacing: 0.02em;
     @media screen and (min-width:768px) and (max-width:1199px) {
       
   font-size:20px;
}
  @media screen and (max-width:767px) {
margin-bottom: 10px;
   font-size:15px;
}

`;

