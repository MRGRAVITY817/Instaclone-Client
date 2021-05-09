import { isLoggedInVar, logUserOut } from "../lib/apollo";

const Home = () => {
  return (
    <div>
      <h1>Wow you logged in!</h1>
      <button onClick={() => logUserOut()}>Log out</button>
    </div>
  );
};

export default Home;
