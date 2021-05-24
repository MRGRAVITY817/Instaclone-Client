import { SeeAllFeeds_seeFeed_feeds } from "../__generated__/SeeAllFeeds";
import styled from "styled-components";
import { Comment } from "./Comment";
import { useForm } from "react-hook-form";
import { useCreateComment } from "../hooks/useCreateComment";
import { CreateComment } from "../__generated__/CreateComment";
import { MutationUpdaterFn } from "@apollo/client";
import { useMe } from "../hooks/useMe";

const CommentsContainer = styled.div`
  margin-top: 20px;
`;

const CommentCount = styled.span`
  opacity: 0.7;
  margin: 10px 0px;
  display: block;
  font-size: 10px;
`;

const PostCommentContainer = styled.div`
  margin-top: 10px;
  padding-top: 15px;
  padding-bottom: 10px;
  border-top: 1px solid ${(props) => props.theme.borderColor}; ;
`;

const PostCommentInput = styled.input`
  width: 100%;
  &::placeholder {
    font-size: 12px;
  }
`;

interface CommentsProps {
  photo: SeeAllFeeds_seeFeed_feeds;
}

interface CommentsForm {
  payload: string;
}

export const Comments: React.FC<CommentsProps> = ({ photo }) => {
  const userData = useMe();
  const update: MutationUpdaterFn<CreateComment> = (cache, result) => {
    const { ok, id } = result.data?.createComment!;
    if (ok && userData?.me) {
      const { payload } = getValues();
      setValue("payload", "");
      const newComment = {
        __typename: "Comment",
        createdAt: Date.now() + "",
        id,
        isMine: true,
        payload,
        user: {
          ...userData?.me,
        },
      };
      cache.modify({
        id: `Photo:${photo.id}`,
        fields: {
          comments: (prev) => [...prev, newComment],
          commentNumber: (prev) => prev + 1,
        },
      });
    }
  };
  const [createCommentMutation, { loading }] = useCreateComment(update);

  const { register, handleSubmit, setValue, getValues } =
    useForm<CommentsForm>();
  const onValid = (data: CommentsForm) => {
    const { payload } = data;
    if (loading) {
      return;
    }
    createCommentMutation({ variables: { photoId: photo.id, payload } });
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
      <PostCommentContainer>
        <form onSubmit={handleSubmit(onValid)}>
          <PostCommentInput
            type="text"
            placeholder="Write a comment..."
            {...register("payload", { required: true })}
          />
        </form>
      </PostCommentContainer>
    </CommentsContainer>
  );
};
