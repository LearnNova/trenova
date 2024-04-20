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
          usedSpace: `${school.usedSpace}MB`,
          availableSpace: `${school.availableSpace}`,
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
    { field: "isActivated", headerName: "Active", width: 70 },
    { field: "usedSpace", headerName: "usedSpace", width: 100 },
    { field: "availableSpace", headerName: "availableSpace", width: 100 },
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
                  // handleDelete(params.row.id, params.row.images); // removed for futre
                  toast.success(
                    "Delete is unavailable at the moment kindly deactivate school"
                  );
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
    <div className="m-auto mt-10 max-w-[1500px] text-xl">
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
        <div className="mt-5 " style={{ height: 520, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[9, 20]}
            checkboxSelection
            disableRowSelectionOnClick
            sx={{
              backgroundColor: "#F5F5F5",
              boxShadow: 2,
              border: 2,
              borderColor: "#d97706",
              "& .MuiDataGrid-cell:hover": {
                color: "primary.main",
              },
            }}
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
