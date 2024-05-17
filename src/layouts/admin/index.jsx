import React, { useCallback } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import Footer from "components/footer/Footer";
import { routes, teacherroutes, schoolroutes } from "routes.js";
import ManageSchools from "views/admin/schools";
import ViewCourse from "views/admin/courses/ViewCourse";
import EditCourseForm from "views/admin/courses/EditCourse";
import { useSelector } from "react-redux";

export default function Admin(props) {
  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");
  const { userInfo } = useSelector((state) => state.auth);

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);
  React.useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  const getActiveRoute = (routes) => {
    let activeRoute = "Main Dashboard";
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(
          routes[i].layout + "/" + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].secondary;
      }
    }
    return activeNavbar;
  };

  // const getRoutes = (routes) => {
  //   return routes.flatMap((prop, key) => {
  //     if (prop.layout === "/admin") {
  //       if (prop.routes) {
  //         return;
  //         <Route path={`/${prop.path}`} element={prop.component} key={key}>
  //           , ...getRoutes(prop.routes)
  //         </Route>;
  //       } else {
  //         return (
  //           <Route path={`/${prop.path}`} element={prop.component} key={key} />
  //         );
  //       }
  //     } else {
  //       return null;
  //     }
  //   });
  // };

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else if (prop.layout === "/teacher") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
        // <Route path={`/${prop.path}`} element={prop.component} key={key} />;
      }
    });
  };
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  document.documentElement.dir = "ltr";
  return (
    <div className="flex h-full w-full">
      <Sidebar open={open} onClose={handleClose} />
      {/* Navbar & Main Content */}
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        {/* Main Content */}
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[255px]`}
        >
          {/* Routes */}
          <div className="h-full">
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              logoText={"LearnNova"}
              brandText={currentRoute}
              secondary={getActiveNavbar(routes)}
              {...rest}
            />
            <div className="mx-auto mb-auto h-full min-h-[74vh] p-2 pt-5 md:pr-2">
              <Routes>
                {userInfo.role === "admin" ? getRoutes(routes) : null}
                {userInfo.role === "schoolAdmin"
                  ? getRoutes(schoolroutes)
                  : null}
                {userInfo.role === "teacher" ? getRoutes(teacherroutes) : null}

                <Route path="/viewcoursedetails/:id" element={<ViewCourse />} />
                <Route path="/edit-course/:id" element={<EditCourseForm />} />

                <Route
                  path="/"
                  element={<Navigate to="/admin/all-course" replace />}
                />
              </Routes>
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
