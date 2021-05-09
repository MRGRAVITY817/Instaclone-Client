import { logUserOut } from "../lib/apollo";

const Home = () => {
  return (
    <div
      style={{
        flex: `1`,
        justifyItems: `center`,
        justifyContent: `center`,
        backgroundColor: "green",
        padding: `200px 200px`,
      }}
    >
      <h1
        style={{
          flex: `1`,
          color: "white",
          fontSize: "4em",
          textAlign: "center",
          border: `2 white`,
        }}
      >
        Wow you logged in!
      </h1>
      <button
        style={{
          flex: `1`,
          backgroundColor: `black`,
          color: `white`,
          appearance: `none`,
          MozAppearance: `none`,
          WebkitAppearance: `none`,
          fontStyle: `italic`,
          fontSize: `2em`,
          borderWidth: `3px`,
          borderColor: `yellow`,
        }}
        onClick={() => logUserOut()}
      >
        Log out
      </button>
    </div>
  );
};

export default Home;
