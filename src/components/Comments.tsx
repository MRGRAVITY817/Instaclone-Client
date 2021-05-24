import { SeeAllFeeds_seeFeed_feeds } from "../__generated__/SeeAllFeeds";
import styled from "styled-components";
import { Comment } from "./Comment";

const CommentsContainer = styled.div`
  margin-top: 20px;
`;

const CommentCount = styled.span`
  opacity: 0.7;
  margin: 10px 0px;
  display: block;
  font-size: 10px;
`;

interface CommentsProps {
  photo: SeeAllFeeds_seeFeed_feeds;
}

export const Comments: React.FC<CommentsProps> = ({ photo }) => {
  return (
    <CommentsContainer>
      <Comment author={photo.user.username!} payload={photo.caption!} />
      <CommentCount>
        {photo.commentNumber === 1
          ? `1 comment`
          : `${photo.commentNumber} comments`}
      </CommentCount>
      {photo.comments?.map((comment) => (
        <Comment
          key={comment?.id}
          author={comment?.user.username!}
          payload={comment?.payload!}
        />
      ))}
    </CommentsContainer>
  );
};
