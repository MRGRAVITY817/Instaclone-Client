import { SeeAllFeeds_seeFeed_feeds } from "../__generated__/SeeAllFeeds";
import styled from "styled-components";
import { Comment } from "./Comment";
import { useForm } from "react-hook-form";
import { useCreateComment } from "../hooks/useCreateComment";
import { CreateComment } from "../__generated__/CreateComment";

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

interface CommentsForm {
  payload: string;
}

export const Comments: React.FC<CommentsProps> = ({ photo }) => {
  const onCompleted = (data: CreateComment) => {
    console.log(data.createComment.ok);
  };
  const [createCommentMutation, { loading }] = useCreateComment(onCompleted);

  const { register, handleSubmit, setValue } = useForm<CommentsForm>();
  const onValid = (data: CommentsForm) => {
    const { payload } = data;
    if (loading) {
      return;
    }
    createCommentMutation({ variables: { photoId: photo.id, payload } });
    setValue("payload", "");
  };

  return (
    <CommentsContainer>
      <Comment author={photo.user.username!} payload={photo.caption!} />
      <CommentCount>
        {photo.commentNumber === 1
          ? `1 comment`
          : `${photo.commentNumber} comments`}
      </CommentCount>
      {photo.comments?.map((comment, index) => (
        <Comment
          key={index}
          author={comment?.user.username!}
          payload={comment?.payload!}
        />
      ))}
      <div>
        <form onSubmit={handleSubmit(onValid)}>
          <input
            type="text"
            placeholder="Write a comment..."
            {...register("payload", { required: true })}
          />
        </form>
      </div>
    </CommentsContainer>
  );
};
