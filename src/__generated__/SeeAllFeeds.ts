/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SeeAllFeeds
// ====================================================

export interface SeeAllFeeds_seeFeed_feeds_user {
  __typename: "User";
  username: string;
  avatar: string | null;
}

export interface SeeAllFeeds_seeFeed_feeds {
  __typename: "Photo";
  id: number;
  user: SeeAllFeeds_seeFeed_feeds_user;
  file: string;
  caption: string | null;
  likes: number;
  comments: number;
  createdAt: string;
  isMine: boolean;
  isLiked: boolean;
}

export interface SeeAllFeeds_seeFeed {
  __typename: "SeeFeedResult";
  ok: boolean;
  error: string | null;
  feeds: (SeeAllFeeds_seeFeed_feeds | null)[] | null;
}

export interface SeeAllFeeds {
  seeFeed: SeeAllFeeds_seeFeed;
}
