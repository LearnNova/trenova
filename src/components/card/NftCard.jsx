import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useState, useCallback } from "react";
import Card from "components/card";
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDeleteCourseMutation } from "../../redux/api/CoursesApiSlice";
import { toast } from "react-hot-toast";

const NftCard = ({
  title,
  classFor,
  term,
  image,
  bidders,
  extra,
  id,
  refetch,
}) => {
  const [heart, setHeart] = useState(true);
  const [deleteUser] = useDeleteCourseMutation();

  const navigate = useNavigate();

  const handleDelete = useCallback(async (id) => {
    if (window.confirm("Are you sure")) {
      try {
        toast("Deleting Course, Please wait!");
        await deleteUser(id);
        refetch();
        toast("Course Deleted!");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
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

        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
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
            <button
              onClick={handleDelete}
              className="linear text-base flex items-center gap-1 rounded-[20px] bg-red-500 px-4 py-2 font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
            >
              <MdDelete /> Delete
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          <div className="flex">
            <p className="text-sm mb-2 font-bold text-brand-500 dark:text-white">
              Term {term}
            </p>
          </div>
          <button
            onClick={() => navigate(`/admin/edit-course/${id}`)}
            className="linear text-base flex items-center gap-1 rounded-[20px] bg-brand-900 px-4 py-2 font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
          >
            <MdEdit /> Edit
          </button>
        </div>
      </div>
    </Card>
  );
};

export default NftCard;
