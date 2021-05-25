/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SeeProfile
// ====================================================

export interface SeeProfile_seeProfile_photos {
  __typename: "Photo";
  id: number;
  file: string;
  likes: number;
  commentNumber: number;
  isLiked: boolean;
}

export interface SeeProfile_seeProfile {
  __typename: "User";
  firstName: string;
  lastName: string | null;
  username: string;
  bio: string | null;
  avatar: string | null;
  photos: (SeeProfile_seeProfile_photos | null)[] | null;
  totalFollowing: number;
  totalFollowers: number;
  isMe: boolean;
  isFollowing: boolean;
}

export interface SeeProfile {
  seeProfile: SeeProfile_seeProfile | null;
}

export interface SeeProfileVariables {
  username: string;
}
