import * as React from "react";
import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "./../../../redux/api/usersApiSlice";
import Loader from "components/Loader";
import {
  setCredentials,
  setTecherCredentials,
} from "./../../../redux/features/auth/authSlice";
import { toast } from "react-hot-toast";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTeacherloginMutation } from "./../../../redux/api/teachersApiSlice";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const [teacherlogin, { isLoading: teacherloading }] =
    useTeacherloginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    console.log(username, password);
    if (userInfo) {
      navigate("/admin");
    }
  }, [navigate, userInfo]);
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(username, password);
    try {
      const res = await login({ username, password }).unwrap();
      console.log(res);
      dispatch(setCredentials({ ...res }));
      navigate("/admin");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  const HandleTeacherLogin = async (e) => {
    e.preventDefault();
    console.log(username, password);
    try {
      const res = await teacherlogin({ username, password }).unwrap();
      console.log(res);
      dispatch(setTecherCredentials({ ...res }));
      navigate("/admin");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <div className="mt-8 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className=" w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="text-4xl mb-2.5 font-bold text-navy-700 dark:text-white">
          Sign In
        </h4>
        <p className="text-base mb-9 ml-1 text-gray-600">
          Enter your Username and password to sign in!
        </p>
        {/* <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Sign In with Google
          </h5>
        </div> */}

        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab className=" w-1/2" label="School" {...a11yProps(0)} />
              <Tab className=" w-1/2" label="Teacher" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <form onSubmit={submitHandler}>
              {/* Username */}
              <InputField
                variant="auth"
                extra="mb-3"
                label="Username*"
                placeholder="Trenova123"
                id="username"
                required
                type="text"
                value={username} // Use email state
                onChange={(e) => setUsername(e.target.value)} // Update email state
              />

              {/* Password */}
              <InputField
                variant="auth"
                extra="mb-3"
                label="Password*"
                placeholder="Min. 8 characters"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* Checkbox */}
              <div className="mb-4 flex items-center justify-between px-2">
                <div className="flex items-center">
                  <Checkbox />
                  <p className="text-sm ml-2 font-medium text-navy-700 dark:text-white">
                    Keep me logged In
                  </p>
                </div>
                <a
                  className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                  href=" "
                >
                  Forgot Password?
                </a>
              </div>
              <button className="linear text-base mt-2 w-full rounded-xl bg-gold py-[12px] font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                {isLoading ? "Signing In..." : "Sign In"}
              </button>
              {isLoading && <Loader />}
            </form>
            <div className="mt-4">
              <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
                Not registered yet?
              </span>
              <Link
                to={"/auth/signup"}
                className="text-sm ml-1 font-medium text-brand-500 hover:text-brand-600 dark:text-white"
              >
                SignUp
              </Link>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <form onSubmit={HandleTeacherLogin}>
              {/* Username */}
              <InputField
                variant="auth"
                extra="mb-3"
                label="Username*"
                placeholder="Trenova123"
                id="username"
                required
                type="text"
                value={username} // Use email state
                onChange={(e) => setUsername(e.target.value)} // Update email state
              />

              {/* Password */}
              <InputField
                variant="auth"
                extra="mb-3"
                label="Password*"
                placeholder="Min. 8 characters"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* Checkbox */}
              <div className="mb-4 flex items-center justify-between px-2">
                <div className="flex items-center">
                  <Checkbox />
                  <p className="text-sm ml-2 font-medium text-navy-700 dark:text-white">
                    Keep me logged In
                  </p>
                </div>
                <a
                  className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                  href=" "
                >
                  Forgot Password?
                </a>
              </div>
              <button className="linear text-base mt-2 w-full rounded-xl bg-gold py-[12px] font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                {isLoading ? "Signing In..." : "Sign In"}
              </button>
              {isLoading && <Loader />}
            </form>
            <div className="mt-4">
              <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
                Not registered yet?
              </span>
              <span className="text-sm ml-1 font-medium text-brand-500 hover:text-brand-600 dark:text-white">
                Contact School Admin
              </span>
            </div>
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
}
