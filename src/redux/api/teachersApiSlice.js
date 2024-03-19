import { apiSlice } from "./apiSlice";
import { TEACHERS_URL } from "../constants";

export const teacherApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    teacherlogin: builder.mutation({
      query: (data) => ({
        url: `${TEACHERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    teachersignup: builder.mutation({
      query: (data) => ({
        url: `${TEACHERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${TEACHERS_URL}/logout`,
        method: "GET",
      }),
    }),
    profile: builder.mutation({
      query: (data) => ({
        url: `${TEACHERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
    getTeachers: builder.query({
      query: (id) => ({
        url: `${TEACHERS_URL}?schoolID=${id}`,
      }),
      providesTags: ["Teacher"],
      keepUnusedDataFor: 5,
    }),
    deleteTeacher: builder.mutation({
      query: (teacherId) => ({
        url: `${TEACHERS_URL}/${teacherId}`,
        method: "DELETE",
      }),
    }),
    getTeacherDetails: builder.query({
      query: (id) => ({
        url: `${TEACHERS_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
    updateTeacher: builder.mutation({
      query: ({ id, data }) => ({
        url: `${TEACHERS_URL}/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useTeachersignupMutation,
  useTeacherloginMutation,
  useLogoutMutation,
  useGetTeachersQuery,
  useUpdateTeacherMutation,
  useDeleteTeacherMutation,
  useProfileMutation,
  useGetTeacherDetailsQuery,
} = teacherApiSlice;
