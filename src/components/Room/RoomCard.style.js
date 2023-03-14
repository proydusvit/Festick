import styled from 'styled-components';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export const Lin = styled(Link)`
   text-decoration: none;
   color: ${({ theme }) => theme.colors.black};
   font-size: 18px;
   :hover{
      color: ${({ theme }) => theme.colors.black};
   }
`;

export const Btn = styled(Button)`

  background-color: ${({ theme }) => theme.colors.background};
  border-color: ${({ theme }) => theme.colors.background};
  :hover{
      background-color: ${({ theme }) => theme.colors.background};
       border-color: ${({ theme }) => theme.colors.background};
   }
`;

export const Box = styled.div`

  height: 195px;
`;


export const CardBox = styled(Card)`
 border-color: ${({ theme }) => theme.colors.background};
  :hover{
 
    box-shadow: 12px 12px 2px 1px ${({ theme }) => theme.colors.background};
   }
`;