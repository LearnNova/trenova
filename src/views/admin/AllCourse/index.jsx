import Banner from "./components/Banner";
import NFt2 from "assets/img/nfts/Nft2.png";
import NFt4 from "assets/img/nfts/Nft4.png";
import NFt3 from "assets/img/nfts/Nft3.png";
import NFt5 from "assets/img/nfts/Nft5.png";
import NFt6 from "assets/img/nfts/Nft6.png";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import NftCard from "components/card/NftCard";
import { useGetCoursesQuery } from "../../../redux/api/CoursesApiSlice";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useGetUsersQuery } from "../../../redux/api/usersApiSlice";
import Loader from "components/Loader";
import { toast } from "react-hot-toast";

const AllCourse = () => {
  const [findClass, setfindClass] = useState("KG 1");
  const [id, setId] = useState("65e3614f928b5ff87f987b44");
  const [term, setTerm] = useState(1);
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

  const termOptions = ["1", "2", "3"];
  const { userInfo } = useSelector((state) => state.auth);
  console.log("userInfouserInfo", userInfo);
  const {
    data: users,
    isLoading: Userloading,
    isError: userError,
  } = useGetUsersQuery();
  useEffect(() => {
    if (userInfo.role === "schoolAdmin") {
      setId(userInfo._id);
    } else if (userInfo.role === "teacher") {
      setId(userInfo.schoolID);
    }
  }, []);

  const {
    data: courses = [],
    isLoading,
    refetch,
    isError,
    error,
  } = useGetCoursesQuery({
    class: `${findClass}`,
    term: `${term}`,
    school: `${
      userInfo.role === "schoolAdmin"
        ? userInfo._id
        : userInfo.role === "teacher"
        ? userInfo.schoolID
        : id
    }`,
  });
  console.log("userInfo", userInfo);
  console.log("courses", courses);
  if (isLoading) {
    <Loader />;
  }
  if (isError) {
    console.log(error);
    toast.error(error.error || error?.data.message);
  }
  return (
    // <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
    <div className="mt-3 grid h-full grid-cols-1 gap-5">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/* NFt Banner */}
        <Banner />

        {/* Course Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="text-2xl ml-1 font-bold text-navy-700 dark:text-white">
            Filter Courses{" "}
          </h4>
          <div className="mb-4 flex gap-3">
            {userInfo.role === "admin" &&
              (Userloading || !users ? null : (
                <div>
                  <label
                    htmlFor="school"
                    className="text-sm block font-medium text-gray-700"
                  >
                    School
                  </label>
                  <select
                    id="school"
                    name="school"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="mt-1 w-full rounded-md border border-gold p-2 focus:border-gold focus:outline-none focus:ring focus:ring-yellow-500"
                  >
                    <option value="65e3614f928b5ff87f987b44">
                      Trenova Owned
                    </option>
                    {users.users.map((option, index) => (
                      <option key={index} value={option._id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            <div>
              <label
                htmlFor="name"
                className="text-sm block font-medium text-gray-700"
              >
                Term
              </label>
              <select
                id="term"
                name="term"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="mt-1 w-full rounded-md border border-gold p-2 focus:border-gold focus:outline-none focus:ring focus:ring-yellow-500"
              >
                <option value="">Select Term</option>
                {termOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="name"
                className="text-sm block font-medium text-gray-700"
              >
                Class
              </label>
              <select
                id="class"
                name="class"
                value={findClass}
                onChange={(e) => setfindClass(e.target.value)}
                className="mt-1 w-full rounded-md border border-gold p-2 focus:border-gold focus:outline-none focus:ring focus:ring-yellow-500"
              >
                <option value="">Select Class</option>
                {classOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Course card */}
        <div className="z-20 grid grid-cols-1  gap-5 md:grid-cols-3 xl:grid-cols-5">
          {courses.data ? (
            courses.data.map((course, index) => (
              <NftCard
                key={course._id}
                bidders={[avatar1, avatar2, avatar3]}
                title={course.name}
                classFor={`${course.class}`}
                term={`${course.term}`}
                image={NFt3}
                id={course._id}
                refetch={refetch}
              />
            ))
          ) : isError ? (
            <h2 className=" font-extrabold">
              {error?.data?.message || error.error}
            </h2>
          ) : (
            <Loader />
          )}
        </div>

        {/* Recenlty Added setion */}
        {/* <div className="mb-5 mt-5 flex items-center justify-between px-[26px]">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            Recently Added
          </h4>
        </div> */}

        {/* Recently Add NFTs */}
        {/* <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Abstract Colors"
            classFor="Esthera Jackson"
            term="0.91"
            image={NFt4}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="ETH AI Brain"
            classFor="Nick Wilson"
            term="0.7"
            image={NFt5}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Mesh Gradients"
            classFor="Will Smith"
            term="2.91"
            image={NFt6}
          />
        </div> */}
      </div>

      {/* right side section */}

      {/* <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
        <TopCreatorTable
          extra="mb-5"
          tableData={tableDataTopCreators}
          columnsData={tableColumnsTopCreators}
        />
        <HistoryCard />
      </div> */}
    </div>
  );
};

export default AllCourse;
