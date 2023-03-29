import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  fetchSubscriptions,
  createSubscription,
  fetchSubscription,
  removePlan,
  updateSubscription,
  deleteSubscription,
  userSubscribe,
  fetchSubscribers,
  userSubscriptionUpdate,
  fetchUserScription,
} from "../services/api/SubscriptionsApi";

export const useSubscriptionsData = () => {
  return useQuery(["subscriptions"], fetchSubscriptions);
};

export const useUserSubsciption = () => {
  return useQuery(["subscriptionsForUser"], fetchUserScription);
};

export const useSubscriptionData = (id) => {
  return useQuery(["subscription", id], () => fetchSubscription(id));
};

export const useCreateSubscription = () => {
  const navigate = useNavigate();
  return useMutation(createSubscription, {
    onSuccess: (newData) => {
      navigate(-1);
    },
  });
};

export const useRemovePlan = () => {
  return useMutation(removePlan);
};

export const useUpdateSubscription = () => {
  const navigate = useNavigate();
  return useMutation(updateSubscription, {
    onSuccess: (newData) => {
      navigate(-1);
    },
  });
};

export const useDeleteSubscription = () => {
  return useMutation(deleteSubscription);
};

export const useUserSubscribe = () => {
  return useMutation(userSubscribe);
};

export const useSubscribersData = (status, page, limit) => {
  return useQuery(["subscribers", page], () =>
    fetchSubscribers(status, page, limit)
  );
};

export const useUserSubscriptionUpdate = () => {
  return useMutation(userSubscriptionUpdate);
};
