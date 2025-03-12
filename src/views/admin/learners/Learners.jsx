// Learners.jsx
import React, { useCallback, useState, useEffect, useMemo } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { MdCached, MdDelete, MdEdit, MdRemoveRedEye } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ActionButton from "components/ActionButton";
import ModalLearner from "components/ModalLearner";
import {
  useDeleteLearnerMutation,
  useGetLearnersQuery,
  useUpdateLearnerMutation,
} from "../../../redux/api/learnersApiSlice";
import Loader from "components/Loader";
import Message from "components/Message";
import { useGetUsersQuery } from "../../../redux/api/usersApiSlice";
import { useSelector } from "react-redux";

const Learners = () => {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingLearner, setEditingLearner] = useState(null);
  const [createLearner, setCreateLearner] = useState(false);
  const [deleteUser] = useDeleteLearnerMutation();
  const [updateLearner] = useUpdateLearnerMutation();
  const [id, setId] = useState(null);
  const { data, refetch, isLoading, error } = useGetLearnersQuery(id);

  const { userInfo } = useSelector((state) => state.auth);

  // Memoize the learnerData array
  // const learnerData = useMemo(
  //   () => [
  //     {
  //       _id: "65td88746q07e5ehhh34e0xx477d8ee",
  //       name: "Example Learner 1",
  //       username: "example_user1",
  //       email: "example1@example.com",
  //       code: "12345",
  //       point: 100,
  //       role: "learnerAdmin",
  //       photo: "learner1.jpg",
  //     },
  //     // Add more learner data here
  //   ],
  //   []
  // );

  useEffect(() => {
    refetch();
    if (!isLoading && data) {
      console.log(data);
      const updatedRows = data.learners.map((learner) => {
        return {
          id: learner._id,
          name: learner.name,
          username: learner.username,
          class: learner.class,
          age: learner.age,
          role: learner.role,
          isActivated: learner.isActivated,
          maxDevice: learner.maxDevice,
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
  const columns = [
    { field: "name", headerName: "Name", width: 300 },
    { field: "username", headerName: "Username", width: 200 },
    { field: "age", headerName: "Age", width: 80 },
    { field: "class", headerName: "Class", width: 120 },
    { field: "role", headerName: "Role", width: 100 },
    { field: "isActivated", headerName: "isActivated", width: 100 },
    { field: "maxDevice", headerName: "maxDevice", width: 80 },
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
                  handleEditClick(params.row); // Pass the learner data to the edit function
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
                onClick={() => {
                  handleActivate(params.row.id, params.row.isActivated);
                }}
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
  const handleEditClick = useCallback((learner) => {
    setEditingLearner((prevLearner) => {
      console.log(prevLearner); // Previous value of editingLearner
      console.log(learner); // New value of editingLearner
      return learner; // Update editingLearner with the new value
    });
    console.log("learner", editingLearner);
    setEditModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setEditModalOpen(false);
  }, []);
  const createLearnerModal = useCallback(() => {
    setCreateLearner(false);
  }, []);

  const handleActivate = useCallback(async (id, isActivated) => {
    console.log("toggle");
    try {
      toast("Activating Learner, Please wait!");
      await updateLearner({
        id: id,
        data: { isActivated: !isActivated },
      })
        .unwrap()
        .then((payload) => toast.success(toast("Learner Activated!")))
        .catch((error) =>
          error.status == 401
            ? toast.error("Unauthorized")
            : toast.error(error?.data?.message || "something went rong")
        );
      refetch();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  }, []);

  const handleDelete = useCallback(async (id, images) => {
    if (window.confirm("Are you sure")) {
      try {
        toast("Deleting Learner, Please wait!");
        await deleteUser(id)
          .unwrap()
          .then((payload) => toast.success(toast("Learner Deleted!")))
          .catch((error) =>
            error.status == 401
              ? toast.error("Unauthorized")
              : toast.error(error?.data?.message || "something went rong")
          );
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  }, []);

  return (
    <div className="m-auto mt-10 max-w-[1350px] text-xl">
      <div className="flex justify-between">
        {/* <button
          className="rounded-lg bg-gold p-2 text-white"
          onClick={() => setCreateLearner(true)}
        >
          + Add Learner
        </button> */}
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
        <button
          onClick={() => navigate(`/admin/learner/add`)}
          className="linear text-base flex items-center gap-1 rounded-[20px] bg-gold px-4 py-2 font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
        >
          Add Learner
        </button>
      </div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <div className="mt-5" style={{ height: 550, width: "100%" }}>
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
        <ModalLearner
          isOpen={editModalOpen}
          onClose={handleCloseModal}
          learner={editingLearner}
          refetch={refetch}
        />
      )}
      {createLearner && (
        <ModalLearner
          isOpen={createLearner}
          onClose={createLearnerModal}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default Learners;
