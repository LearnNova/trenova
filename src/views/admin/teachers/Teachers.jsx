// Teachers.jsx
import React, { useCallback, useState, useEffect, useMemo } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { MdCached, MdDelete, MdEdit, MdRemoveRedEye } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ActionButton from "components/ActionButton";
import Modal from "components/Modal";
import ModalTeacher from "components/ModalTeacher";
import {
  useDeleteTeacherMutation,
  useGetTeachersQuery,
} from "../../../redux/api/teachersApiSlice";
import Loader from "components/Loader";
import Message from "components/Message";
import { useSelector } from "react-redux";
import { useGetUsersQuery } from "../../../redux/api/usersApiSlice";

const Teachers = () => {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [createTeacher, setCreateTeacher] = useState(false);
  const [id, setId] = useState(null);

  const { data, refetch, isLoading, error } = useGetTeachersQuery(id);
  const [deleteUser] = useDeleteTeacherMutation();
  const { userInfo } = useSelector((state) => state.auth);

  // Memoize the teacherData array
  // const teacherData = useMemo(
  //   () => [
  //     {
  //       _id: "65td88746q07e5ehhh34e0xx477d8ee",
  //       name: "Example Teacher 1",
  //       username: "example_user1",
  //       email: "example1@example.com",
  //       code: "12345",
  //       point: 100,
  //       role: "teacherAdmin",
  //       photo: "teacher1.jpg",
  //     },
  //     // Add more teacher data here
  //   ],
  //   []
  // );

  useEffect(() => {
    refetch();
    if (!isLoading && data) {
      const updatedRows = data.teachers.map((teacher) => {
        return {
          id: teacher._id,
          name: teacher.name,
          username: teacher.username,
          email: teacher.email,
          role: teacher.role,
        };
      });
      setRows(updatedRows);
    }
  }, [data, refetch]);

  useEffect(() => {
    if (userInfo.role === "schoolAdmin") {
      setId(userInfo._id);
    } else if (userInfo.role === "teacher") {
      setId(userInfo.schoolID);
    }
  }, []);
  console.log("userInfo.role", userInfo.role);
  const columns = [
    { field: "name", headerName: "Name", width: 180 },
    { field: "username", headerName: "Username", width: 120 },
    { field: "email", headerName: "Email", width: 220 },
    { field: "role", headerName: "Role", width: 100 },
    {
      field: "Action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex w-full justify-between gap-4">
            <div className="text-gold hover:bg-cyan-300">
              <ActionButton
                icon={MdEdit}
                onClick={() => {
                  handleEditClick(params.row); // Pass the teacher data to the edit function
                }}
              />
            </div>
            <div className=" text-red-600 hover:bg-cyan-300">
              <ActionButton
                icon={MdDelete}
                onClick={() => {
                  handleDelete(params.row.id, params.row.images);
                }}
              />
            </div>
            <div className=" text-green-600 hover:bg-cyan-300">
              <ActionButton
                icon={MdRemoveRedEye}
                // onClick={() => {
                //   navigate(`/teacher/${params.row.id}`);
                // }}
              />
            </div>
          </div>
        );
      },
    },
  ];
  const {
    data: users,
    isLoading: Userloading,
    isError: userError,
  } = useGetUsersQuery();

  const handleEditClick = useCallback((teacher) => {
    setEditingTeacher((prevTeacher) => {
      console.log(prevTeacher); // Previous value of editingTeacher
      console.log(teacher); // New value of editingTeacher
      return teacher; // Update editingTeacher with the new value
    });
    console.log("teacher", editingTeacher);
    setEditModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setEditModalOpen(false);
  }, []);
  const createTeacherModal = useCallback(() => {
    setCreateTeacher(false);
  }, []);

  const handleToggleStock = useCallback((id, inStock) => {
    console.log("toggle");
  }, []);

  const handleDelete = useCallback(async (id, images) => {
    if (window.confirm("Are you sure")) {
      try {
        toast("Deleting Teacher, Please wait!");
        await deleteUser(id);
        refetch();
        toast("Teacher Deleted!");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  }, []);

  return (
    <div className="m-auto mt-10 max-w-[1150px] text-xl">
      <div className="flex justify-between">
        <button
          className="rounded-lg bg-gold p-2 text-white"
          onClick={() => setCreateTeacher(true)}
        >
          + Add Teacher
        </button>
        <div>
          {userInfo.role === "admin" &&
            (Userloading || !users ? null : (
              <div>
                <select
                  id="school"
                  name="school"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="mt-1 w-full rounded-md border border-gold p-2 focus:border-gold focus:outline-none focus:ring focus:ring-yellow-500"
                >
                  <option value="">Select School</option>
                  {users.users.map((option, index) => (
                    <option key={index} value={option._id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            ))}
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <div className="mt-5" style={{ height: 420, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[9, 20]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </div>
      )}
      {editModalOpen && (
        <ModalTeacher
          isOpen={editModalOpen}
          onClose={handleCloseModal}
          teacher={editingTeacher}
          refetch={refetch}
        />
      )}
      {createTeacher && (
        <ModalTeacher
          isOpen={createTeacher}
          onClose={createTeacherModal}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default Teachers;
