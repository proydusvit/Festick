
import styled from "styled-components";

export const DefaultPageStyled = styled.main`
  h2 {
  
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 66px;
    margin-bottom: 0;
    color: ${({ theme }) => theme.colors.background};
    text-align: center;
    @media screen and (min-width:767px) {
        font-size: 48px;
        margin-bottom: 5px
    }
  }
`;

export const MainContainer = styled.div`
    padding: 5px 5px 20px 5px; 
    background-color: white;
    @media screen and (min-width: 768px) and (max-width: 1279px) {
        padding: 14px 10px 30px 10px;
    }
    @media screen and (min-width: 1280px) {
        padding: 30px 16px 20px 16px;
    }
`;
