import { gql, useMutation } from "@apollo/client";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import styled from "styled-components";
import { AuthLayout } from "../components/auth/AuthLayout";
import { BottomBox } from "../components/auth/BottomBox";
import { Button } from "../components/auth/Button";
import { FormBox } from "../components/auth/FormBox";
import { FormError } from "../components/auth/FormError";
import { Input } from "../components/auth/Input";
import { PageTitle } from "../components/PageTitle";
import { FatLink } from "../components/shared/FatLink";
import {
  createAccountMutation,
  createAccountMutationVariables,
} from "../__generated__/createAccountMutation";
import routes from "./routes";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled(FatLink)`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

interface SignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccountMutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $username: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      email: $email
      username: $username
      password: $password
    ) {
      ok
      error
    }
  }
`;

const SignUp = () => {
  const history = useHistory();
  const { register, getValues, formState, handleSubmit } = useForm<SignUpForm>({
    mode: "onChange",
  });
  const onCompleted = (data: createAccountMutation) => {
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok && error) {
      window.alert(error);
    } else if (ok) {
      const { username, password } = getValues();
      history.push(routes.home, {
        message: "Account created. Please log in.",
        username,
        password,
      });
    }
  };
  const [createAccountMutation, { loading }] = useMutation<
    createAccountMutation,
    createAccountMutationVariables
  >(CREATE_ACCOUNT_MUTATION, { onCompleted });
  const onSubmit = () => {
    const data = getValues();
    if (loading) return;
    createAccountMutation({
      variables: {
        ...data,
      },
    });
  };
  return (
    <AuthLayout>
      <PageTitle title="Sign Up" />
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
          <Subtitle>
            Sign up to see photos and videos from your friends.
          </Subtitle>
        </HeaderContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: "First Name is required" })}
          />
          <FormError message={formState.errors.firstName?.message || ""} />
          <Input
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: "Last Name is required" })}
          />
          <FormError message={formState.errors.lastName?.message || ""} />
          <Input
            type="text"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
          <FormError message={formState.errors.email?.message || ""} />
          <Input
            type="text"
            placeholder="Username"
            {...register("username", { required: "Username is required" })}
          />
          <FormError message={formState.errors.username?.message || ""} />
          <Input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          <FormError message={formState.errors.password?.message || ""} />
          <Button type="submit" value="Sign up" />
        </form>
      </FormBox>
      <BottomBox cta="Have an account? " linkText="Log in" link={routes.home} />
    </AuthLayout>
  );
};

export default SignUp;
