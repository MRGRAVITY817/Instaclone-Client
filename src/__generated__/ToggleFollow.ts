/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ToggleFollow
// ====================================================

export interface ToggleFollow_toggleFollow {
  __typename: "ToggleFollowResult";
  ok: boolean;
  error: string | null;
  following: boolean | null;
}

export interface ToggleFollow {
  toggleFollow: ToggleFollow_toggleFollow;
}

export interface ToggleFollowVariables {
  username: string;
}
