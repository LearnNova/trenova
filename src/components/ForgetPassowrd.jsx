import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import InputField from "./fields/InputField";
import { useForm } from "react-hook-form";
import {
  useForgetPasswordMutation,
  useResetPasswordMutation,
} from "../redux/api/usersApiSlice";

import { toast } from "react-hot-toast";

export default function ForgetPassowrd({ isOpen, onClose }) {
  const [forget, SetForget] = useState(true);
  // const cancelButtonRef = useRef(null);
  const [forgetPassowrd, { isLoading }] = useForgetPasswordMutation();

  const {
    register,
    handleSubmit: submit,
    formState: { errors, isSubmitting: forgetting },
  } = useForm();
  const [ResetPassword] = useResetPasswordMutation();

  const onForget = async (data) => {
    console.log(forget, "forget");
    try {
      console.log("dddddd");
      const res = await forgetPassowrd(data)
        .unwrap()
        .then((payload) => {
          toast.success(toast("otp sent to email successfully"));
          SetForget(false);
        })
        .catch((error) =>
          error.status == 401
            ? toast.error("Unauthorized")
            : toast.error(error?.data?.message || "something went rong")
        );
    } catch (err) {
      toast.error(err?.error?.message || "An error occurred");
    }
  };
  const onReset = async (data) => {
    console.log(forget, "forget");
    try {
      console.log(data);
      await ResetPassword({
        data: data,
        otp: data.otp,
      })
        .unwrap()
        .then((payload) => {
          toast.success("updated successfully");
          onClose();
        })
        .catch((error) =>
          error.status == 401
            ? toast.error("Unauthorized")
            : toast.error(error?.data?.message || "something went rong")
        );
    } catch (err) {
      toast.error(err?.error?.message || "An error occurred");
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
                  Reset Password
                </Dialog.Title>
                <div className="justify-center sm:flex sm:items-start">
                  <form>
                    <div className="mt-2">
                      {/* Your InputField components */}
                      <InputField
                        variant="auth"
                        extra="mb-3"
                        label="Email*"
                        placeholder="teacher@mysch.com"
                        id="email"
                        type="email"
                        required
                        register={register}
                      />
                      {!forget ? (
                        <>
                          {" "}
                          <InputField
                            variant="auth"
                            extra="mb-3"
                            label="Otp*"
                            placeholder="123443"
                            id="otp"
                            required
                            type="text"
                            register={register}
                          />
                          <InputField
                            variant="auth"
                            extra="mb-3"
                            label="Password*"
                            placeholder="Min. 8 characters"
                            id="password"
                            required
                            type="text"
                            register={register}
                          />
                          <InputField
                            variant="auth"
                            extra="mb-3"
                            label="Confirm Password*"
                            placeholder="Min. 8 characters"
                            id="passwordConfirm"
                            required
                            type="text"
                            register={register}
                          />
                        </>
                      ) : null}
                      {/* Add other fields for creating/editing a teacher */}
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        onClick={submit(onForget)}
                        className="border-transparent text-base sm:text-sm inline-flex w-full justify-center rounded-md border bg-blue px-4 py-2 font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto"
                        disabled={forgetting}
                      >
                        {forgetting ? "Sending..." : "Send Otp"}
                      </button>
                      {!forget ? (
                        <button
                          type="button"
                          onClick={submit(onReset)}
                          className="border-transparent text-base sm:text-sm inline-flex w-full justify-center rounded-md border bg-gold px-4 py-2 font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto"
                          disabled={forgetting}
                        >
                          {forgetting ? "Submitting..." : "Submit"}
                        </button>
                      ) : null}
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
