// ManageSchools.jsx
import React, { useCallback, useState, useEffect, useMemo } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { MdCached, MdDelete, MdEdit, MdRemoveRedEye } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ActionButton from "components/ActionButton";
import Modal from "components/Modal";
import Loader from "components/Loader";
import Message from "components/Message";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "../../../redux/api/usersApiSlice";

const ManageSchools = () => {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingSchool, setEditingSchool] = useState(null);
  const { data, refetch, isLoading, error } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  // Memoize the schoolData array
  // const schoolData = useMemo(
  //   () => [
  //     {
  //       _id: "65td88746q07e5ehhh34e0xx477d8ee",
  //       name: "Example School 1",
  //       username: "example_user1",
  //       email: "example1@example.com",
  //       code: "12345",
  //       point: 100,
  //       role: "schoolAdmin",
  //       photo: "school1.jpg",
  //     },
  //     // Add more school data here
  //   ],
  //   []
  // );
  console.log("schoool", data);
  useEffect(() => {
    refetch();
    if (!isLoading && data) {
      const updatedRows = data.users.map((school) => {
        return {
          id: school._id,
          name: school.name,
          username: school.username,
          email: school.email,
          code: school.code,
          point: school.point,
          role: school.role,
          isActivated: school.isActivated,
        };
      });
      setRows(updatedRows);
    }
  }, [data, refetch]);

  const columns = [
    { field: "name", headerName: "Name", width: 280 },
    { field: "username", headerName: "Username", width: 120 },
    { field: "email", headerName: "Email", width: 220 },
    { field: "code", headerName: "Code", width: 80 },
    { field: "point", headerName: "Point", width: 80 },
    { field: "role", headerName: "Role", width: 110 },
    { field: "isActivated", headerName: "isActivated", width: 100 },
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
                  handleEditClick(params.row); // Pass the school data to the edit function
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
                //   navigate(`/school/${params.row.id}`);
                // }}
              />
            </div>
          </div>
        );
      },
    },
  ];

  // const handleEditClick = useCallback((school) => {
  //   setEditingSchool(school);
  //   setEditModalOpen(true);
  // }, []);
  const handleEditClick = useCallback((school) => {
    setEditingSchool((prevSchool) => {
      console.log(prevSchool); // Previous value of editingTeacher
      console.log(school); // New value of editingTeacher
      return school; // Update editingTeacher with the new value
    });
    console.log("teacher", editingSchool);
    setEditModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setEditModalOpen(false);
  }, []);

  const handleToggleStock = useCallback((id, inStock) => {
    console.log("toggle");
  }, []);

  const handleDelete = useCallback(async (id, images) => {
    if (window.confirm("Are you sure")) {
      try {
        toast("Deleting school, Please wait!");
        await deleteUser(id);
        refetch();
        toast("School Deleted!");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  }, []);

  return (
    <div className="m-auto mt-10 max-w-[1250px] text-xl">
      <button className="rounded-lg bg-gold p-2 text-white">
        + Add School
      </button>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <div className="mt-5" style={{ height: 520, width: "100%" }}>
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
        <Modal
          isOpen={editModalOpen}
          onClose={handleCloseModal}
          school={editingSchool}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default ManageSchools;
