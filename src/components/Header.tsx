import { useReactiveVar } from "@apollo/client";
import { faCompass, faUser } from "@fortawesome/free-regular-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMe } from "../hooks/useMe";
import { isLoggedInVar } from "../lib/apollo";
import routes from "../screens/routes";
import { Avatar } from "./Avatar";

const StyledHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  padding: 12px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
const Wrapper = styled.div`
  max-width: 930px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Column = styled.div``;

const Icon = styled.span`
  margin-left: 15px;
`;

const Button = styled.span`
  background-color: ${(props) => props.theme.accent};
  border-radius: 4px;
  padding: 5px 15px;
  color: white;
  font-weight: 600;
`;

const IconsContainer = styled.div`
  display: flex;
`;

export const Header = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const data = useMe();
  return (
    <StyledHeader>
      <Wrapper>
        <Column>
          <FontAwesomeIcon icon={faHome} size="lg" />
        </Column>
        <Column>
          {isLoggedIn ? (
            <IconsContainer>
              <Icon>
                <FontAwesomeIcon icon={faHome} size="lg" />
              </Icon>
              <Icon>
                <FontAwesomeIcon icon={faCompass} size="lg" />
              </Icon>
              <Icon>
                {isLoggedIn ? (
                  <Avatar url={data?.me?.avatar!} />
                ) : (
                  <FontAwesomeIcon icon={faUser} size="lg" />
                )}
              </Icon>
            </IconsContainer>
          ) : (
            <Link to={routes.home}>
              <Button>Login</Button>
            </Link>
          )}
        </Column>
      </Wrapper>
    </StyledHeader>
  );
};