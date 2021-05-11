import styled from "styled-components";
import { Header } from "../Header";

const Content = styled.main`
  margin-top: 45px;
`;

export const Layout = ({ ...props }) => {
  return (
    <>
      <Header />
      <Content>{props.children}</Content>
    </>
  );
};
