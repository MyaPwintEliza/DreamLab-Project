
import { fetchPlan, createPlan, updatePlan, deletePlan } from "../services/api/PlansApi"
import { useQuery, useMutation } from "@tanstack/react-query"

export const usePlanData = () => {
    return useQuery(['plans'], fetchPlan);
}

export const useCreatePlan = () => {
    return useMutation(createPlan);
}

export const useUpdatePlan = () => {
    return useMutation(updatePlan);
}

export const useDeletePlan = () => {
    return useMutation(deletePlan)
}