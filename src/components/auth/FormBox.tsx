import styled from "styled-components";
import { BaseBox } from "../shared/BaseBox";

const TopBox = styled(BaseBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px 40px 25px 40px;
  margin-bottom: 10px;
  form {
    margin-top: 35px;
    width: 100%;
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const FormBox = ({ ...props }) => {
  return <TopBox>{props.children}</TopBox>;
};
