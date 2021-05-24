import styled from "styled-components";
import { SeeAllFeeds_seeFeed_feeds } from "../__generated__/SeeAllFeeds";
import { Avatar } from "./Avatar";
import { FatText } from "./shared/FatText";
import { Username } from "../screens/Home";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { useToggleLike } from "../hooks/useToggleLike";
import { Comments } from "./Comments";

const PhotoContainer = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  margin-bottom: 20px;
  border-radius: 4px;
  max-width: 615px;
`;

const PhotoHeader = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(239, 239, 239);
`;

const PhotoFile = styled.img`
  width: 100%;
`;

const PhotoData = styled.div`
  padding: 12px 15px;
`;

const PhotoActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
  svg {
    font-size: 20px;
  }
`;

const PhotoAction = styled.div`
  margin-right: 10px;
`;

const Likes = styled(FatText)`
  margin-top: 15px;
  display: block;
`;

interface PhotoProps {
  photo: SeeAllFeeds_seeFeed_feeds;
}

export const Photo: React.FC<PhotoProps> = ({ photo }) => {
  const [toggleLikeMutation] = useToggleLike(
    photo.id,
    photo.isLiked,
    photo.likes
  );
  return (
    <PhotoContainer key={photo.id}>
      <PhotoHeader>
        <Avatar url={photo.user?.avatar || ""} />
        <Username>{photo.user?.username}</Username>
      </PhotoHeader>
      <PhotoFile src={photo.file} />
      <PhotoData>
        <PhotoActions>
          <div>
            <PhotoAction>
              <FontAwesomeIcon
                onClick={() =>
                  photo.id !== undefined &&
                  toggleLikeMutation({ variables: { id: photo.id } })
                }
                style={{ color: photo.isLiked ? "tomato" : "inherit" }}
                icon={photo?.isLiked ? SolidHeart : faHeart}
              />
            </PhotoAction>
            <PhotoAction>
              <FontAwesomeIcon icon={faComment} />
            </PhotoAction>
            <PhotoAction>
              <FontAwesomeIcon icon={faPaperPlane} />
            </PhotoAction>
          </div>
          <div>
            <FontAwesomeIcon icon={faBookmark} />
          </div>
        </PhotoActions>
        <Likes>{photo.likes === 1 ? "1 like" : `${photo.likes} likes`}</Likes>
        <Comments photo={photo} />
      </PhotoData>
    </PhotoContainer>
  );
};
