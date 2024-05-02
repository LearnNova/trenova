import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import InputField from "./fields/InputField";
import { useForm } from "react-hook-form";
import {
  useLearnersignupMutation,
  useUpdateLearnerMutation,
} from "../redux/api/learnersApiSlice";
import { toast } from "react-hot-toast";

export default function ModalLearner({ isOpen, onClose, learner, refetch }) {
  // const cancelButtonRef = useRef(null);
  console.log("learner1", learner);
  const [learnersignup, { isLoading }] = useLearnersignupMutation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm();
  const [updateLearner, { error }] = useUpdateLearnerMutation();

  useEffect(() => {
    if (isOpen && learner) {
      setValue("name", learner.name);
      setValue("username", learner.username);
      setValue("age", learner.age);
      setValue("class", learner.class);
      setValue("maxDevice", learner.maxDevice);
    }
  }, [isOpen, learner, setValue]);
  const classOptions = [
    "KG 1",
    "KG 2",
    "Nursery 1",
    "Nursery 2",
    "Grade 1",
    "Grade 2",
    "Grade 3",
    "Grade 4",
    "Grade 5",
    "Grade 6",
    "JSS 1",
    "JSS 2",
    "JSS 3",
    "SSS 1",
    "SSS 2",
    "SSS 3",
  ];
  const onSubmit = async (data) => {
    console.log(data);
    try {
      if (!data) {
        throw new Error("No data provided.");
      }

      if (learner && learner.id) {
        // Update existing learner
        const res = await updateLearner({
          id: learner.id,
          data: data,
        })
          .unwrap()
          .then((payload) => toast.success("Learner updated successfully"))
          .catch((error) =>
            error.status == 401
              ? toast.error("Unauthorized")
              : toast.error(error?.data?.message || "something went rong")
          );
      } else {
        const res = await learnersignup(data).unwrap();

        toast.success("Learner created successfully");
      }

      refetch(); // Assuming refetch is a function to refetch the learner data
      onClose();
    } catch (err) {
      console.error("Error:", err);
      toast.error(err.message || err?.data?.message);
    }
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        // initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {learner ? "Edit Learner" : "Create Learner"}
                </Dialog.Title>
                <div className="justify-center sm:flex sm:items-start">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-2">
                      {/* Your InputField components */}
                      <InputField
                        variant="auth"
                        extra="mb-3"
                        label="Name*"
                        placeholder="Trenova"
                        id="name"
                        type="text"
                        register={register}
                      />
                      <InputField
                        variant="auth"
                        extra="mb-3"
                        label="Username*"
                        placeholder="Trenova123"
                        id="username"
                        type="text"
                        register={register}
                      />
                      <InputField
                        variant="auth"
                        extra="mb-3"
                        label="Age*"
                        placeholder="12"
                        id="age"
                        type="text"
                        register={register}
                      />
                      <div>
                        <label
                          htmlFor="name"
                          className="text-sm block font-medium text-gray-700"
                        >
                          Class*
                        </label>
                        <select
                          id="class"
                          name="class"
                          {...register("class", { required: true })}
                          className="mt-1 w-full rounded-md border p-2 focus:border-gold focus:outline-none focus:ring focus:ring-yellow-500"
                        >
                          <option value="" disabled>
                            Select Option
                          </option>
                          {classOptions.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      {/* <InputField
                        variant="auth"
                        extra="mb-3"
                        label="Class*"
                        placeholder="12"
                        id="class"
                        type="text"
                        register={register}
                      /> */}
                      <InputField
                        variant="auth"
                        extra="mb-3"
                        label="Password*"
                        placeholder="Min. 8 characters"
                        id="password"
                        type="password"
                        register={register}
                      />
                      <InputField
                        variant="auth"
                        extra="mb-3"
                        label="reset Device*"
                        id="maxDevice"
                        type="number"
                        register={register}
                      />
                      {/* Add other fields for creating/editing a learner */}
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="submit"
                        className="border-transparent text-base sm:text-sm inline-flex w-full justify-center rounded-md border bg-red-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </button>
                      <button
                        type="button"
                        className="text-base sm:text-sm mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto"
                        onClick={onClose}
                        // ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
