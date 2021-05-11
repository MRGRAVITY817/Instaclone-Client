import { logUserOut } from "../lib/apollo";

const Home = () => {
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        justifyItems: `center`,
        justifyContent: `center`,
        backgroundColor: "lightGray",
        padding: `200px 200px`,
      }}
    >
      <h1
        style={{
          color: "black",
          fontSize: "4em",
          textAlign: "center",
          border: `2 white`,
          marginBottom: `20px`,
        }}
      >
        Wow you logged in!
      </h1>
      <button
        style={{
          backgroundColor: `black`,
          color: `white`,
          fontStyle: `italic`,
          fontSize: `2em`,
          borderWidth: `3px`,
        }}
        onClick={() => logUserOut()}
      >
        Log out
      </button>
    </div>
  );
};

export default Home;
