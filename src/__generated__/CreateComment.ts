/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateComment
// ====================================================

export interface CreateComment_createComment {
  __typename: "MutationResponse";
  ok: boolean;
  error: string | null;
  id: number | null;
}

export interface CreateComment {
  createComment: CreateComment_createComment;
}

export interface CreateCommentVariables {
  photoId: number;
  payload: string;
}
