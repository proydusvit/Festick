
import styled, { keyframes } from 'styled-components';

import Heart from  "../../images/svg/heart.svg"



const heartBeat = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const Title = styled.h3`

font-family: 'Prosto One', cursive;
color: ${({ theme }) => theme.colors.background};
@media (min-width: 1280px){
  position: absolute;
  top: 92px;
  left: 16px;
      margin-top:100px;
          margin-left:160px;
  margin-bottom: 0;
  height: 200px;
  width: 588px;
  font-size: 78px;
  font-weight: 700;
  line-height: 1.47;
  text-align: left;
}
@media (min-width: 768px) and (max-width: 1279px){
    position: absolute;
   margin-left: 150px;
    margin-top: 88px;
    margin-bottom:0;
    width: 588px;
   
    height: 200px;    
    font-size: 58px;
    font-weight: 700;
    line-height: 1,47;
text-align:center;
    z-index: 4;
   
}
@media (max-width: 767px){
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-top:20px;
    top: 100px;
    margin-bottom:0;
    width: 280px;
    height: 88px;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.38;
     z-index: 4;
   
}`

export const Content = styled.div`

margin-top:61px;
width: 1280px;

height:100%;
::after{
content:'';
position: absolute;

width:160px;
height:160px;
background-image: url(${Heart}); 
background-size: contain;
background-repeat: no-repeat; 
animation:  ${heartBeat} 1s ease-in-out infinite alternate;
 @media screen and (min-width: 768px) and (max-width: 1279px) {
     width:230px;
height:230px;
    }
    @media screen and (min-width: 1280px) {
     width:300px;
height:300px;
left: 1000px;
top:259px;
    }
}
            

`;



export const Containers = styled.div`
    padding:0px 20px 250px 20px; 

    /* @media screen and (min-width: 768px) {
        padding: 0px 32px 350px 32px;
    } */
    @media screen and (min-width: 1280px) {
        padding: 0px 32px 420px 32px;
    }
`;



