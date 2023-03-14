import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import styled from "styled-components";
export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Montserrat';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ffffff;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
`;
export const Loader = styled.div`
padding: 100% 100%;
background-color: #fcfcfc;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
  
`;