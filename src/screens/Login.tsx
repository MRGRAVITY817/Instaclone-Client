import { isLoggedInVar } from "../lib/apollo";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => isLoggedInVar(true)}>Log in</button>
    </div>
  );
};

export default Login;
