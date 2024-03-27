import React from "react";

// Import your components for each route
import MainDashboard from "views/admin/default";
import ManageSchools from "views/admin/schools";
import DataTables from "views/admin/tables";
import Profile from "views/admin/profile";

// Import icons for the routes
import {
  MdHome,
  MdSchool,
  MdBookmarks,
  MdGroup,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";
import Teachers from "views/admin/teachers/Teachers";
import { Route, Routes } from "react-router-dom";
import SignUp from "views/auth/signUp/Signup";
import SignIn from "views/auth/signIn/SignIn";
import Learners from "views/admin/learners/Learners";
import Courses from "views/admin/courses/Courses";
import EditCourseForm from "views/admin/courses/EditCourse";
import ViewCourse from "views/admin/courses/ViewCourse";
import AllCourse from "views/admin/AllCourse";
import Upload from "views/admin/upload/Upload";

// Define your route configuration
export const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Schools",
    layout: "/admin",
    path: "school",
    icon: <MdSchool className="h-6 w-6" />,
    component: <ManageSchools />,
  },
  {
    name: "Teachers",
    layout: "/admin",
    path: "teachers",
    icon: <MdBookmarks className="h-6 w-6" />,
    component: <Teachers />,
  },

  {
    name: "Learners",
    layout: "/admin",
    path: "learner",
    icon: <MdGroup className="h-6 w-6" />,
    component: <Learners />,
  },
  {
    name: "Courses",
    layout: "/admin",
    path: "all-course",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <AllCourse />,
    secondary: true,
  },
  {
    name: "Create Course",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "create-course",
    component: <Courses />,
  },
  // {
  //   name: "New Teacher",
  //   layout: "/teacher",
  //   path: "new",
  //   component: <ManageSchools />,
  // },
  // {
  //   name: "Teacher Details",
  //   layout: "/teacher",
  //   path: ":teacherId",
  //   component: <ManageSchools />,
  // },
  // {
  //   name: "Edit course",
  //   layout: "/admin",
  //   icon: <MdBarChart className="h-6 w-6" />,
  //   path: "edit-course/:id",
  //   component: <EditCourseForm />,
  // },
  // {
  //   name: "View course",
  //   layout: "/admin",
  //   path: "viewcoursedetails/:id",
  //   icon: <MdPerson className="h-6 w-6" />,
  //   component: <ViewCourse />,
  // },
  // {
  //   name: "upload",
  //   layout: "/admin",
  //   path: "upload",
  //   icon: <MdPerson className="h-6 w-6" />,
  //   component: <Upload />,
  // },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "login",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Sign Up",
    layout: "/auth",
    path: "signup",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignUp />,
  },
];
export const schoolroutes = [
  {
    name: "Teachers",
    layout: "/admin",
    path: "teachers",
    icon: <MdBookmarks className="h-6 w-6" />,
    component: <Teachers />,
  },

  {
    name: "Learners",
    layout: "/admin",
    path: "learner",
    icon: <MdGroup className="h-6 w-6" />,
    component: <Learners />,
  },
  {
    name: "Courses",
    layout: "/admin",
    path: "all-course",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <AllCourse />,
    secondary: true,
  },
  {
    name: "Create Course",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "create-course",
    component: <Courses />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
];
export const teacherroutes = [
  {
    name: "Learners",
    layout: "/admin",
    path: "learner",
    icon: <MdGroup className="h-6 w-6" />,
    component: <Learners />,
  },
  {
    name: "Courses",
    layout: "/admin",
    path: "all-course",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <AllCourse />,
    secondary: true,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
];
