/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ToggleLike
// ====================================================

export interface ToggleLike_toggleLike {
  __typename: "MutationResponse";
  ok: boolean;
  error: string | null;
}

export interface ToggleLike {
  toggleLike: ToggleLike_toggleLike;
}

export interface ToggleLikeVariables {
  id: number;
}
