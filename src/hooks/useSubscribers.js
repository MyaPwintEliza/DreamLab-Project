import {
  getUserSubscriptions,
  userSubscriptionUpdate,
} from "../services/api/SubscriberApi"
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetUserSubscription = (status, page, limit) => {
  return useQuery(["subscribers", status, page, limit], () =>
    getUserSubscriptions(status, page, limit)
  );
};

export const useUpdateUserSubscription = () => {
  return useMutation(userSubscriptionUpdate);
};
