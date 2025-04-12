import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useLearnersignupMutation } from "./../../../redux/api/learnersApiSlice";
import InputField from "components/fields/InputField";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AddLearner = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    reset,
  } = useForm();
  const [learnersignup, { isLoading }] = useLearnersignupMutation();
  const [showPassword, setShowPassword] = useState(false);

  const classOptions = [
    { label: "Select a class", value: "" },
    { label: "KG 1", value: "KG 1" },
    { label: "KG 2", value: "KG 2" },
    { label: "Nursery 1", value: "Nursery 1" },
    { label: "Nursery 2", value: "Nursery 2" },
    { label: "Grade 1", value: "Grade 1" },
    { label: "Grade 2", value: "Grade 2" },
    { label: "Grade 3", value: "Grade 3" },
    { label: "Grade 4", value: "Grade 4" },
    { label: "Grade 5", value: "Grade 5" },
    { label: "Grade 6", value: "Grade 6" },
    { label: "JSS 1", value: "JSS 1" },
    { label: "JSS 2", value: "JSS 2" },
    { label: "JSS 3", value: "JSS 3" },
    { label: "SSS 1", value: "SSS 1" },
    { label: "SSS 2", value: "SSS 2" },
    { label: "SSS 3", value: "SSS 3" },
  ];

  const onSubmit = async (data) => {
    if (data.password !== data.passwordConfirm) {
      alert("Passwords do not match");
      return;
    }
    if (data.password.length < 8) {
      alert("Passwords must be at least 8 characters");
      return;
    }
    try {
      const res = await learnersignup(data).unwrap();

       // dispatch(setCredentials({ ...res }));

      if (res.success) { 
        reset();
        toast.success("Learner added successfully");
      } else {
        toast.error("An error occurred: " + (res.message || "Please try again"));
      }
      // reset();
      // toast.success("Learner added up successfully");
    } catch (err) {
      console.log(err);
      toast.error(err?.data?.message || "try again");

      // alert(err?.data?.message || err.error);
    }
  };

  return (
    <div className="flex items-center justify-center  ">
      <form
        className="w-full max-w-4xl rounded-xl bg-white p-6 shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl mb-6 text-center font-bold text-gold">
          Add Learner
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Left Column with 4 Inputs */}
          <div className="space-y-3">
            <InputField
              variant="auth"
              extra="mb-3"
              label="Name*"
              placeholder="Your Name"
              id="name"
              type="text"
              register={register}
              required
            />

            <InputField
              variant="auth"
              extra="mb-3"
              label="Username*"
              placeholder="LearnNova123"
              id="username"
              type="text"
              register={register}
              required
            />

            <InputField
              variant="auth"
              extra="mb-3"
              label="Age*"
              placeholder="Your Age"
              id="age"
              type="number"
              register={register}
              required
            />

            <div className="mb-3">
              <label className="text-sm mb-2 font-bold text-navy-700 dark:text-white">
                Class
              </label>
              <select
                className="text-sm h-12 w-full rounded-xl border border-gray-300 p-2"
                {...register("class", { required: true })}
              >
                {classOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.class && (
                <p className="text-sm text-red-500">Class is required</p>
              )}
            </div>
          </div>

          {/* Right Column with Remaining Inputs */}
          <div className="space-y-3">
            <InputField
              variant="auth"
              extra="mb-3"
              label="School Username*"
              placeholder="LearnNova123"
              id="schoolID"
              type="text"
              register={register}
              required
            />

            <div className="relative">
              <InputField
                variant="auth"
                extra="mb-3"
                label="Password*"
                placeholder="**********"
                id="password"
                type={showPassword ? "text" : "password"}
                register={register}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-[68%] -translate-y-1/2 transform text-gray-500 hover:text-gray-900"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>

            <div className="relative">
              <InputField
                variant="auth"
                extra="mb-3"
                label="Confirm Password*"
                placeholder="**********"
                id="passwordConfirm"
                type={showPassword ? "text" : "password"}
                register={register}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-[68%] -translate-y-1/2 transform text-gray-500 hover:text-gray-900"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="hover:bg-gold-dark mt-6 w-full rounded-xl bg-gold py-2 text-white transition duration-300"
          disabled={isLoading}
        >
          {isLoading ? "Adding Learner..." : "Add Learner"}
        </button>

        {/* <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-gold hover:underline">
              Sign In
            </Link>
          </p>
        </div> */}
      </form>
    </div>
  );
};

export default AddLearner;
