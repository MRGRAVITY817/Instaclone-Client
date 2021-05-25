import styled from "styled-components";

export const Button = styled.input`
  border: none;
  border-radius: 5px;
  width: 100%;
  margin-top: 12px;
  background-color: ${(props) => props.theme.accent};
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  opacity: ${(props) => (props.disabled ? "0.2" : "1.0")};
  padding: 10px 10px;
`;
