import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loader from "components/Loader";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useSignupMutation } from "../../../redux/api/usersApiSlice";
import { setCredentials } from "../../../redux/features/auth/authSlice";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const [signup, { isLoading }] = useSignupMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(username, password);
    if (userInfo) {
      navigate("/admin");
    }
  }, [navigate, userInfo]);

  const onSubmit = async (data) => {
    // Handle form submission
    console.log(data);
    try {
      const res = await signup(data).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/auth/login");
      toast.success("School successfully registered");
    } catch (err) {
      console.log(err);
      toast.error(err?.data?.message || err.error);
    }
  };

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   console.log(username, password);
  //   try {
  //     const res = await login({ username, password }).unwrap();
  //     console.log(res);
  //     dispatch(setCredentials({ ...res }));
  //     navigate("/admin");
  //   } catch (err) {
  //     toast.error(err?.data?.message || err.error);
  //   }
  // };
  return (
    <div className="mt-8 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign up section */}
      <div className=" w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="text-4xl mb-2.5 font-bold text-navy-700 dark:text-white">
          Sign Up
        </h4>
        <p className="text-base mb-9 ml-1 text-gray-600">
          Enter Credentials to sign up! Code to be gotten from LearnNova admin
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            variant="auth"
            extra="mb-3"
            label="School name*"
            placeholder="LearnNova schools"
            id="name"
            required
            type="text"
            register={register}
          />
          <InputField
            variant="auth"
            extra="mb-3"
            label="Username*"
            placeholder="LearnNova123"
            id="username"
            required
            type="text"
            register={register}
          />
          <InputField
            variant="auth"
            extra="mb-3"
            label="Email*"
            placeholder="LearnNova123@LearnNova.com"
            id="email"
            required
            type="email"
            register={register}
          />
          <InputField
            variant="auth"
            extra="mb-3"
            label="Code*"
            placeholder="3e43d"
            id="code"
            required
            type="text"
            register={register}
          />
          <InputField
            variant="auth"
            extra="mb-3"
            label="Password*"
            required
            placeholder="Min. 8 characters"
            id="password"
            type="password"
            register={register}
          />
          <InputField
            variant="auth"
            extra="mb-3"
            label="Confirm password*"
            required
            placeholder="Min. 8 characters"
            id="passwordConfirm"
            type="password"
            register={register}
          />

          <button
            type="submit"
            className="linear text-base mt-2 w-full rounded-xl bg-brand-500 py-[12px] font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          >
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </button>
          {isSubmitting && <Loader />}
        </form>
        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            already registered ?
          </span>
          <Link
            to={"/auth/login"}
            className="text-sm ml-1 font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
