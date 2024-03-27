import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useState, useCallback } from "react";
import Card from "components/card";
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdEdit, MdRemoveRedEye } from "react-icons/md";
import {
  useDeleteCourseMutation,
  useUpdateCourseMutation,
} from "../../redux/api/CoursesApiSlice";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { deleteFileFromS3 } from "utils/aws";
import ActionButton from "components/ActionButton";

const NftCard = ({
  title,
  classFor,
  term,
  image,
  bidders,
  extra,
  id,
  refetch,
  school,
  course,
}) => {
  const [heart, setHeart] = useState(true);
  const [deleteCourse] = useDeleteCourseMutation();
  const [updateCourse] = useUpdateCourseMutation();

  const { userInfo } = useSelector((state) => state.auth);
  console.log(course);
  const navigate = useNavigate();

  const handleDelete = useCallback(
    async (id) => {
      if (window.confirm("Are you sure")) {
        try {
          toast("Deleting Course, Please wait!");

          let totalDeletedSize = 0; // Initialize total deleted size

          // Iterate through each week and lesson to delete files and accumulate size
          for (const week of course.content) {
            for (const lesson of week.lessons) {
              const urlParts = lesson.content.split("/");
              const fileKey = decodeURIComponent(urlParts[urlParts.length - 1]);

              // Get file size and delete file from S3
              const deletedFile = await deleteFileFromS3(fileKey);
              totalDeletedSize += deletedFile.size; // Accumulate deleted file size
            }
          }

          // After all files are deleted, submit isDeleted and totalDeletedSize with the course ID
          await deleteCourse({ id, data: { deleteSize: totalDeletedSize } });
          refetch();
          toast("Course Deleted!");
        } catch (err) {
          toast.error(err?.message || "Error deleting course.");
        }
      }
    },
    [course]
  );
  const handleActivate = useCallback(async (id, isPublish) => {
    console.log("toggle");
    try {
      toast("Updating Course, Please wait!");
      await updateCourse({
        id: id,
        data: { isPublish: !isPublish, uploadSize: 0 },
      });
      refetch();
      toast("Course Updated!");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  }, []);
  return (
    <Card
      extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${extra}`}
    >
      <div className="h-full w-full">
        <div className="relative w-full">
          <img
            src={image}
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            alt=""
          />
          <button
            onClick={() => navigate(`/admin/viewcoursedetails/${id}`)}
            className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50 dark:text-navy-900">
              View <AiFillEye />
            </div>
          </button>
        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:flex-row md:items-start lg:justify-between xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700 dark:text-white">
              {" "}
              {title}{" "}
            </p>
            <p className="text-sm mt-1 font-medium text-gray-600 md:mt-2">
              Class {classFor}
            </p>
          </div>

          <div className=" md:mt-2 lg:mt-0">
            {(school === "6603e6e06e7e286c38da1ea1" &&
              userInfo.role !== "admin") ||
            userInfo.role === "teacher" ? null : (
              <button
                onClick={() => handleDelete(id)}
                className="linear text-base flex items-center gap-1 rounded-[20px] bg-red-500 px-4 py-2 font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
              >
                <MdDelete /> Delete
              </button>
            )}
          </div>
        </div>
        <div className="text-sm mb-2 flex justify-between pr-2 font-medium text-gold md:mt-2">
          <p> published: {course.isPublish.toString()}</p>{" "}
          {userInfo.role !== "admin" ? null : (
            <ActionButton
              icon={MdRemoveRedEye}
              onClick={() => {
                handleActivate(id, course.isPublish);
              }}
            />
          )}
        </div>
        <div className="flex items-center justify-between md:flex-row md:items-start lg:flex-row lg:justify-between  2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          <div className="flex">
            <p className="text-sm mb-2 font-bold text-brand-500 dark:text-white">
              Term {term}
            </p>
          </div>
          {(school === "6603e6e06e7e286c38da1ea1" &&
            userInfo.role !== "admin") ||
          userInfo.role === "teacher" ? null : (
            <button
              onClick={() => navigate(`/admin/edit-course/${id}`)}
              className="linear text-base flex items-center gap-1 rounded-[20px] bg-brand-900 px-4 py-2 font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
            >
              <MdEdit /> Edit
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default NftCard;
