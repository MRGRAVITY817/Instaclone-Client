import styled from "styled-components";
import { Photo } from "../components/Photo";
import { FatText } from "../components/shared/FatText";
import { useFeed } from "../hooks/useFeed";

export const Username = styled(FatText)`
  margin-left: 5px;
`;

const Feeds = styled.div`
  padding: 0px 20px;
`;

const Home = () => {
  const { data, loading } = useFeed();
  return (
    <Feeds>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data?.seeFeed.feeds?.map((photo) =>
          photo ? <Photo key={photo?.id} photo={photo} /> : null
        )
      )}
    </Feeds>
  );
};

export default Home;
