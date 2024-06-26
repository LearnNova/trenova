import { apiSlice } from "./apiSlice";
import { LEARNERS_URL } from "../constants";

export const learnerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${LEARNERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    learnersignup: builder.mutation({
      query: (data) => ({
        url: `${LEARNERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${LEARNERS_URL}/logout`,
        method: "GET",
      }),
    }),
    profile: builder.mutation({
      query: (data) => ({
        url: `${LEARNERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
    getLearners: builder.query({
      query: (id) => ({
        url: `${LEARNERS_URL}?schoolID=${id}`,
      }),
      providesTags: ["Learner"],
      keepUnusedDataFor: 5,
    }),
    deleteLearner: builder.mutation({
      query: (learnerId) => ({
        url: `${LEARNERS_URL}/${learnerId}`,
        method: "DELETE",
      }),
    }),
    getLearnerDetails: builder.query({
      query: (id) => ({
        url: `${LEARNERS_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
    updateLearner: builder.mutation({
      query: ({ id, data }) => ({
        url: `${LEARNERS_URL}/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useLearnersignupMutation,
  useGetLearnersQuery,
  useUpdateLearnerMutation,
  useDeleteLearnerMutation,
  useProfileMutation,
  useGetLearnerDetailsQuery,
} = learnerApiSlice;
