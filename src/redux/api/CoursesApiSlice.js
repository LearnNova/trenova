import { apiSlice } from "./apiSlice";
import { COURSES_URL } from "../constants";

export const courseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: (data) => ({
        url: `${COURSES_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    getCourses: builder.query({
      query: (params) => {
        // Construct the full URL with query parameters
        let queryString = "";
        if (params.class) queryString += `class=${params.class}&`;
        if (params.term) queryString += `term=${params.term}&`;
        if (params.school) queryString += `school=${params.school}&`;

        const url = `${COURSES_URL}${queryString ? `?${queryString}` : ""}`;
        return { url };
      },
      providesTags: ["Course"],
      keepUnusedDataFor: 5,
    }),
    deleteCourse: builder.mutation({
      query: (courseId) => ({
        url: `${COURSES_URL}/${courseId}`,
        method: "DELETE",
      }),
    }),
    getCourseDetails: builder.query({
      query: (id) => ({
        url: `${COURSES_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
    updateCourse: builder.mutation({
      query: ({ id, data }) => ({
        url: `${COURSES_URL}/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateCourseMutation,
  useGetCoursesQuery,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
  useGetCourseDetailsQuery,
} = courseApiSlice;
