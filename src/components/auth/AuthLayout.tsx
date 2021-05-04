import { ReactChild } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

export const AuthLayout = ({ ...props }) => {
  return (
    <Container>
      <Wrapper>{props.children}</Wrapper>
    </Container>
  );
};
