/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMe
// ====================================================

export interface GetMe_me {
  __typename: "User";
  id: number;
  username: string;
  avatar: string | null;
}

export interface GetMe {
  me: GetMe_me | null;
}
