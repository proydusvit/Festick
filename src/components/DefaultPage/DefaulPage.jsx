import { Helmet } from "react-helmet";
import { DefaultPageStyled, MainContainer } from "./Defaultpagestyle";

export const DefaultPage = ({ children, title }) => {
  return (
    <DefaultPageStyled>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MainContainer>
        <h2>{title}</h2>
        {children}
      </MainContainer>
    </DefaultPageStyled>
  );
};