import styled from "styled-components";

const SFormError = styled.span`
  color: tomato;
  font-weight: 500;
  font-size: 12px;
  margin-top: 4px;
`;

interface FormErrorProps {
  message: string;
}

export const FormError: React.FC<FormErrorProps> = ({ message }) => {
  return message === "" || !message ? null : <SFormError>{message}</SFormError>;
};
