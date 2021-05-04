import styled from "styled-components";

const NewSeparator = styled.div`
  margin: 20px 0px 30px 0px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  div {
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.borderColor};
  }
  span {
    margin: 0px 10px;
    font-weight: 600;
    color: #8e8e8e;
  }
`;

export const Separator = ({ ...props }) => {
  return (
    <NewSeparator>
      <div />
      <span>{props.children}</span>
      <div />
    </NewSeparator>
  );
};