import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FatText } from "./shared/FatText";
import { useDeleteComment } from "../hooks/useDeleteComment";
import { MutationUpdaterFn } from "@apollo/client";
import { DeleteComment } from "../__generated__/DeleteComment";

const StyledComment = styled.div`
  margin: 6px 0px;
`;

const CommentCaption = styled.span`
  margin-left: 4px;
  mark {
    background-color: inherit;
    color: ${(props) => props.theme.accent};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
interface CommentProps {
  author: string;
  payload: string;
  id?: number;
  isMine?: boolean;
  photoId?: number;
}

export const Comment: React.FC<CommentProps> = ({
  author,
  payload,
  id,
  isMine,
  photoId,
}) => {
  const update: MutationUpdaterFn<DeleteComment> = (cache, result) => {
    const { ok, error } = result.data?.deleteComment!;
    console.log(ok, error);
    if (ok) {
      // This removes comment using Comment Id
      cache.evict({ id: `Comment:${id}` });
      // This updates cache of photo using photo id
      cache.modify({
        id: `Photo:${photoId}`,
        fields: {
          commentNumber: (prev) => prev - 1,
        },
      });
    }
  };
  const [deleteCommentMutation] = useDeleteComment(update);
  const onDeleteClick = () => {
    deleteCommentMutation({ variables: { id: id! } });
  };
  return (
    <StyledComment>
      <Link to={`/users/${author}`}>
        <FatText>{author}</FatText>
      </Link>
      <CommentCaption>
        {payload.split(" ").map((word, index) =>
          /#[\w]+/.test(word) ? (
            <React.Fragment key={index}>
              <Link to={`/hashtags/${word}`}>{word}</Link>{" "}
            </React.Fragment>
          ) : (
            <React.Fragment key={index}>{word} </React.Fragment>
          )
        )}
      </CommentCaption>
      {isMine ? <button onClick={() => onDeleteClick()}>X</button> : null}
    </StyledComment>
  );
};
