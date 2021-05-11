import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { isLoggedInVar, logUserOut } from "../lib/apollo";
import { useEffect } from "react";
import { me } from "../__generated__/me";

const ME_QUERY = gql`
  query me {
    me {
      username
      avatar
    }
  }
`;

export const useMe = () => {
  const hasToken = useReactiveVar(isLoggedInVar);
  const { data } = useQuery<me>(ME_QUERY, {
    skip: !hasToken,
  });
  useEffect(() => {
    if (data?.me === null) {
      // Token not working so log out
      logUserOut();
    }
  }, [data]);
  return data;
};
