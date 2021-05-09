import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { AuthLayout } from "../components/auth/AuthLayout";
import { Button } from "../components/auth/Button";
import { Input } from "../components/auth/Input";
import { FormBox } from "../components/auth/FormBox";
import { BottomBox } from "../components/auth/BottomBox";
import { Separator } from "../components/auth/Separator";
import routes from "./routes";
import { PageTitle } from "../components/PageTitle";
import { useForm } from "react-hook-form";
import { FormError } from "../components/auth/FormError";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { login, loginVariables } from "../__generated__/login";
import { useState } from "react";

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

interface LoginForm {
  username: string;
  password: string;
}

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

const Login = () => {
  const { register, handleSubmit, formState, getValues } = useForm<LoginForm>({
    mode: "onChange",
  });

  const [loginError, setLoginError] = useState<string>("");
  const onCompleted = (data: login) => {
    const {
      login: { ok, error, token },
    } = data;
    if (!ok && error) {
      setLoginError(error);
    } else {
      setLoginError("");
    }
    if (token) {
      console.log(token);
    }
  };

  const [loginMutation, { data, loading }] = useMutation<login, loginVariables>(
    LOGIN_MUTATION,
    {
      onCompleted,
    }
  );
  const onSubmitValid = () => {
    const { username, password } = getValues();
    loginMutation({
      variables: { username, password },
    });
  };
  const onSubmitInvalid = (data: any) => {
    console.log(data);
  };
  return (
    <AuthLayout>
      <PageTitle title="Login" />
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <form onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}>
          <Input
            type="text"
            placeholder="Username"
            hasError={Boolean(formState.errors.username)}
            {...register("username", { required: "Username is required" })}
          />
          <FormError message={formState.errors.username?.message || ""} />
          <Input
            type="password"
            placeholder="Password"
            hasError={Boolean(formState.errors.password)}
            {...register("password", { required: "Password is required" })}
          />
          <FormError message={formState.errors.password?.message || ""} />
          <Button
            type="submit"
            placeholder="Log in"
            disabled={!formState.isValid || loading}
            value={loading ? "Loading..." : "Log in"}
          />
          <FormError message={loginError} />
        </form>
        <Separator>Or</Separator>
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in with Facebook</span>
        </FacebookLogin>
      </FormBox>
      <BottomBox
        cta="Don't have a account? "
        link={routes.signUp}
        linkText="Sign up"
      />
    </AuthLayout>
  );
};

export default Login;
