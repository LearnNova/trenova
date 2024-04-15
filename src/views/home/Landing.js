import HomeNav from "components/navbar/HomeNav";
import * as React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import authImg from "assets/img/auth/auth.png";

const Landing = (props) => {
  console.log("hjshdh");
  return (
    <div className="flex flex-col items-center bg-red-100">
      <HomeNav />

      <div className=" relative flex w-full flex-col items-center  bg-gold lg:rounded-b-[20.5rem]">
        {/* <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f7f5e149be377340a4f5206ac8db068dc5197832d8ab6921a98d202557ed051?"
          className="size-full absolute inset-0 object-cover"
        /> */}
        <div className="z-10 flex flex-col sm:flex-row sm:gap-16">
          <div className="my-auto p-5 sm:p-0">
            <img alt="" srcSet="group2.png" className=" max-h-[70vh] " />
          </div>
          <div>
            {" "}
            <img alt="" srcSet="group1.png" className=" max-h-[90vh] " />
          </div>
        </div>
      </div>

      <div className="text-slate-950 max-md:mt-10 max-md:text-4xl mt-8 whitespace-nowrap text-center text-5xl font-bold lg:leading-[62.4px]">
        Our Success
      </div>
      <div className="mt-4 justify-center px-4 text-justify text-gray-500 text-opacity-80 lg:px-96 lg:text-center lg:text-lg lg:leading-7">
        Through innovative teaching methodologies and a dedicated faculty, we've
        consistently achieved remarkable results. Our students have not only
        excelled academically but have also emerged as confident, compassionate
        individuals ready to make a positive impact on the world.
      </div>
      <div className=" mt-8 flex w-full justify-center gap-8 whitespace-nowrap px-5 sm:gap-16">
        <div className="flex  flex-col">
          <div className="max-md:text-4xl text-xs self-center font-light sm:text-13xl">
            <span className="text-blue">10K</span>
          </div>
          <div className="text-gold text-opacity-80 sm:text-3xl">Students</div>
        </div>
        <div className="flex  flex-col">
          <div className="max-md:text-4xl text-xs self-center font-light sm:text-13xl">
            <span className="">75</span> <span className="">%</span>
          </div>
          <div className="text-slate-950 text-opacity-80 sm:text-3xl">
            Total success
          </div>
        </div>
        <div className="flex flex-col">
          <div className="max-md:text-4xl text-xs self-center font-light text-blue sm:text-13xl">
            100+
          </div>
          <div className=" text-gold text-opacity-80 sm:text-3xl">
            Main questions
          </div>
        </div>

        <div className=" hidden  flex-col sm:flex">
          <div className="max-md:text-4xl text-xs self-center bg-[linear-gradient(90deg,#136CB5_0%,#49BBBD_100%)] bg-clip-text font-light sm:text-13xl">
            26+
          </div>
          <div className="text-slate-950 text-opacity-80 sm:text-3xl">
            Chief experts
          </div>
        </div>
        <div className="hidden  flex-col sm:flex">
          <div className="max-md:text-4xl text-xs self-center bg-[linear-gradient(90deg,#136CB5_0%,#49BBBD_100%)] bg-clip-text font-light sm:text-13xl">
            16
          </div>
          <div className="text-slate-950 text-opacity-80 sm:text-3xl">
            Years of experience
          </div>
        </div>
      </div>

      <div className=" mt-8 text-3xl font-semibold sm:text-11xl ">
        <span className="font-bold text-blue">All-In-One </span>
        <span className="font-bold text-gold">Cloud Software.</span>
      </div>
      <div className="text-2xl  max-md:max-w-full mt-4  text-center leading-10 text-gray-500">
        TRENOVA is one powerful online software suite that combines all the
        tools needed to run a successful school or office.
      </div>
      <div className="max-md:mt-10 max-md:max-w-full mt-16 flex w-full max-w-[1470px] px-5">
        <div className="max-md:flex-col max-md:gap-0 flex w-full flex-col gap-5  sm:flex-row">
          <div className="max-md:ml-0 max-md:w-full relative flex flex-col items-center sm:w-[33%]">
            <img
              className="absolute top-[-24px] m-auto h-[100px] w-[100px]"
              alt=""
              src="/group-80.svg"
            />

            <div className="max-md:mt-10 max-md:max-w-full flex h-full w-full grow flex-col rounded-3xl bg-white px-2 py-12  text-center shadow-2xl lg:px-14">
              <div className="mt-5 font-medium text-indigo-900 lg:text-3xl">
                Online Billing, Invoicing, & Contracts
              </div>
              <div className="mt-5 text-gray-500 lg:text-xl lg:leading-9">
                Simple and secure control of your organization’s financial and
                legal transactions. Send customized invoices and contracts
              </div>
            </div>
          </div>
          <div className="max-md:ml-0 max-md:w-full relative flex flex-col items-center sm:w-[33%]">
            <img
              className="absolute top-[-24px] m-auto h-[100px] w-[100px]"
              alt=""
              src="/group-81.svg"
            />
            <div className="max-md:mt-10 max-md:max-w-full flex h-full w-full grow flex-col rounded-3xl bg-white px-2 py-12  text-center shadow-2xl lg:px-14">
              <div className=" mt-5 self-center font-medium text-indigo-900 lg:text-3xl">
                Easy Scheduling & Attendance Tracking
              </div>
              <div className="mt-5 text-gray-500 lg:text-xl lg:leading-9">
                Schedule and reserve classrooms at one campus or multiple
                campuses. Keep detailed records of student attendance
              </div>
            </div>
          </div>
          <div className="max-md:ml-0 max-md:w-full relative flex flex-col items-center sm:w-[33%]">
            <img
              className="absolute top-[-24px] m-auto h-[100px] w-[100px]"
              alt=""
              src="/group-79.svg"
            />
            <div className="max-md:mt-10 max-md:max-w-full flex h-full w-full grow flex-col rounded-3xl bg-white px-2 py-12  text-center shadow-2xl lg:px-14">
              <div className=" mt-5 whitespace-nowrap font-medium text-indigo-900 lg:text-3xl">
                Customer Tracking
              </div>
              <div className="mt-5 text-gray-500 lg:text-xl lg:leading-9">
                Automate and track emails to individuals or groups. Skilline’s
                built-in system helps organize your organization{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-10 whitespace-nowrap text-center text-5xl font-semibold  text-teal-500">
        What is <span className="text-teal-500">TRENOVA?</span>
      </div>
      <div className="text-2xl mt-10 text-center  leading-10 tracking-wide text-gray-500 sm:px-32">
        TRENOVA is a platform that allows educators to create online classes
        whereby they can store the course materials online; manage assignments,
        quizzes and exams; monitor due dates; grade results and provide students
        with feedback all in one place.
      </div>
      <div className="my-4 w-full sm:px-5">
        <div className="flex w-full flex-col gap-5 sm:flex-row">
          <div className="relative w-full flex-col sm:w-1/2">
            <div className="w-full flex-col items-center justify-center px-4 text-center text-white sm:py-12 sm:px-16">
              <img
                loading="lazy"
                srcSet="rectangle-19@2x.png"
                className="inset-0 h-full w-full"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-3xl font-semibold">Teachers</div>
                <div className="text-2xl max-md:px-5 mt-8 justify-center rounded-[80px] border border-solid border-white px-10 py-7 font-medium">
                  Start a class today
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full flex-col sm:w-1/2">
            <div className="flex flex-col items-center justify-center px-4 text-center text-white sm:py-12 sm:px-16">
              <img
                loading="lazy"
                srcSet="rectangle-21@2x.png"
                className="inset-0 h-auto w-full"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-3xl font-semibold">Learners</div>
                <div className="text-2xl max-md:px-5 mt-8 justify-center rounded-[80px] bg-cyan-400 bg-opacity-90 px-11 py-8 font-medium">
                  Download app
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-2 sm:px-20">
        <div className="max-md:gap-0 max-md: flex flex-col gap-5 md:flex-row">
          <div className=" max-md:w-full flex  flex-col">
            <div className="  my-auto flex flex-col px-5  text-gray-500">
              <span className=" mt-10  text-center text-5xl font-semibold  text-gold">
                Everything you can do in a physical classroom, you can do with
                TRENOVA
              </span>
              <div className="text-2xl  max-md:max-w-full leading-10 tracking-wide">
                TRENOVA’s school management software helps traditional and
                online schools manage scheduling, attendance, payments and
                virtual classrooms all in one secure cloud-based system.
              </div>
              <div className="text-2xl  mt-2 underline">Trenova</div>
            </div>
          </div>
          <div className=" flex flex-col p-1">
            <img
              loading="lazy"
              srcSet="group-17.svg"
              className="max-md:mt-10 max-md:max-w-full aspect-[1.45] w-full grow"
            />
          </div>
        </div>
      </div>
      <div className="text-4xl mt-4 whitespace-nowrap  font-bold leading-[64.8px] text-teal-500 sm:text-13xl">
        <span className="">Our </span>
        <span className="text-teal-500">Features</span>
      </div>
      <div className="text-2xl text-center leading-10 text-gray-500 ">
        This very extraordinary feature, can make learning activities more
        efficient
      </div>
      <div className="mt-12 w-full px-5">
        <div className=" flex flex-col justify-center gap-5 sm:flex-row">
          <div className=" relative flex">
            <img
              loading="lazy"
              srcSet="group-17.svg"
              className="inset-0 w-[100%] object-contain sm:h-96"
            />
            <div className="max-md:mt-10 absolute right-[-2px] mt-20  hidden gap-0 self-end sm:flex">
              <div className="max-md:mt-10  mt-52 h-[30px] w-[30px] self-end rounded-full bg-red-400" />
              <div className=" -z-[]  h-[264px] w-[264px] max-w-full rounded-full bg-indigo-500" />
            </div>
          </div>
          <div className="my-auto flex max-w-full flex-col self-start  sm:self-end">
            <p className=" text-center font-bold text-teal-500">
              Perfect user interface for a classroom
            </p>
            <div className="my-2 flex gap-2 tracking-wide">
              <img
                loading="lazy"
                srcSet="group-86@2x.png"
                className="bg-zinc-50 aspect-square h-[50px] w-[60px] self-start rounded-full"
              />
              <div className=" self-center">
                Teachers don’t get lost in the grid view and have a dedicated
                Podium space.
              </div>
            </div>
            <div className=" my-2 flex  gap-2 tracking-wide">
              <img
                loading="lazy"
                srcSet="group-88@2x.png"
                className="bg-zinc-50 aspect-square h-[50px] w-[60px] self-start rounded-full"
              />
              <div className=" self-center">
                TA’s and presenters can be moved to the front of the class.
              </div>
            </div>
            <div className="my-2  flex gap-2 tracking-wide">
              <img
                loading="lazy"
                srcSet="group-86@2x.png"
                className="bg-zinc-50 aspect-square h-[50px] w-[60px] rounded-full"
              />
              <div className=" self-center  ">
                Teachers can easily see all students and class data at one time.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ju mx-5 flex flex-col sm:mx-16 sm:flex-row">
        <div className="my-auto">
          <div className="text-4xl  max-md:max-w-full relative text-center font-bold leading-[64px] text-indigo-900 sm:mt-20">
            <span className="font-semibold text-teal-500">
              Tools For Teachers And Learners
            </span>
          </div>
          <div className="text-2xl z-10  px-1  tracking-wide text-gray-500 sm:ml-12">
            Class has a dynamic set of teaching tools built to be deployed and
            used during class. Teachers can <br /> hand out assignments in
            real-time for students to complete and submit.
          </div>
        </div>
        <div className="max-md:ml-0 max-md:w-full flex flex-col sm:ml-5">
          <div className="text-2xl  max-md:max-w-full flex grow flex-col leading-10 text-gray-500">
            <img
              loading="lazy"
              srcSet="group-122.svg"
              className=" mt-5 aspect-[1.04]  w-[637px]"
            />
          </div>
        </div>
      </div>
      <div className="left-0 mt-20 flex flex-col px-5 md:flex-row">
        <div className="flex flex-col sm:flex-row">
          <div className="ml-28 h-[23px] w-[23px] rounded-full bg-orange-500" />
          <img
            loading="lazy"
            srcSet="group92.png"
            className="w-full rounded-2xl object-contain shadow-2xl sm:w-2/3"
          />
        </div>

        <div className="mt-5 flex flex-col px-2 sm:my-auto sm:pl-5">
          <div className="text-3xl font-bold text-teal-500">
            <span className="font-semibold">Assessments, </span>
            <span className="font-semibold text-teal-500">Quizzes</span>
            <span className="font-semibold">, Tests</span>
          </div>
          <div className="text-2xl tracking-wide text-gray-500">
            Easily launch live assignments, quizzes, and tests. Student results
            are automatically <br /> entered in the online gradebook.
          </div>
        </div>
      </div>
      <div className="left-0 mt-20 flex flex-col px-5 md:flex-row">
        <div className="mt-5 flex flex-col px-2 sm:my-auto sm:pl-5">
          <div className="text-3xl font-bold text-teal-500">
            <span className=" font-semibold text-teal-500">
              Class Management
            </span>{" "}
            <span className="font-semibold">Tools for Educators</span>{" "}
          </div>
          <div className="text-2xl tracking-wide text-gray-500">
            Class provides tools to help run and manage the class such as Class
            Roster, <br />
            Attendance, and more. With the Gradebook, teachers can review and
            grade tests and <br /> quizzes in real-time.
            <span className="text-2xl  mt-2 underline">Trenova</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="ml-28 h-[23px] w-[23px] rounded-full bg-orange-500" />
          <img
            loading="lazy"
            srcSet="group124.png"
            className="w-full rounded-2xl object-contain shadow-2xl sm:w-2/3"
          />
        </div>
      </div>
      <div className="left-0 mt-20 flex flex-col px-5 md:flex-row">
        <div className="flex flex-col sm:flex-row">
          <div className="ml-28 h-[23px] w-[23px] rounded-full bg-orange-500" />
          <img
            loading="lazy"
            srcSet="group106.png"
            className="w-full rounded-2xl object-contain shadow-2xl sm:w-2/3"
          />
        </div>

        <div className="mt-5 flex flex-col px-2 sm:my-auto sm:pl-5">
          <div className="text-3xl font-bold text-teal-500">
            <span className="font-semibold"> One-on-One Discussions</span>
          </div>
          <div className="text-2xl tracking-wide text-gray-500">
            Teachers and teacher assistants can talk with students privately
            without leaving the <br /> Zoom environment. without leaving the
            Zoom environment.without leaving <br /> the Zoom environment.
          </div>
        </div>
      </div>

      {/* <div className="max-md:mt-10 max-md:max-w-full mt-32 flex w-full max-w-[1557px] flex-col px-5">
        <div className="text-4xl max-md:mt-10 max-md:max-w-full mt-44 self-center font-bold leading-[64.8px] text-indigo-900">
          Lastest News and Resources
        </div>
        <div className="text-2xl max-md:mt-10 max-md:max-w-full mt-14 self-center text-center leading-10 text-gray-500">
          See the developments that have occurred to TRENOVA in the world
        </div>
        <div className="max-md:mt-10 max-md:max-w-full mt-28">
          <div className="max-md:gap-0 max-md: flex flex-col gap-5 sm:flex-row">
            <div className="max-md:ml-0 max-md:w-full flex w-[49%] flex-col">
              <div className=" flex flex-col whitespace-nowrap text-xl font-medium leading-9 tracking-wide text-white">
                <div className="bg-indigo-950 max-md:max-w-full relative h- shrink-0 rounded-3xl">
                  <img
                    loading="lazy"
                    srcSet="rectangle-32@2x.png"
                    className="size-full absolute inset-0 object-contain"
                  />
                </div>
                <div className="max-md:px-5 justify-center self-start rounded-[80px] bg-teal-400 px-9 py-3.5">
                  NEWS
                </div>
              </div>
            </div>
            <div className="max-md:ml-0 max-md:w-full ml-5 flex w-[19%] flex-col">
              <div className="max-md:mt-10 flex grow flex-col whitespace-nowrap text-lg tracking-wide text-white">
                <div className="relative flex aspect-[1.4] w-full flex-col justify-center overflow-hidden">
                  <img
                    loading="lazy"
                    srcSet="rectangle-33@2x.png"
                    className="size-full absolute inset-0 object-cover"
                  />
                  <div className="bg-indigo-950 max-md:pl-5 relative flex flex-col items-end rounded-3xl pt-12 pr-5 pb-5 pl-16">
                    <div className="max-md:mt-10 mt-24 justify-center rounded-[80px] bg-teal-400 px-4 py-3">
                      PRESS RELEASE
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-md:mt-10 flex grow flex-col whitespace-nowrap text-lg tracking-wide text-white">
                <div className="relative flex aspect-[1.4] w-full flex-col justify-center overflow-hidden">
                  <img
                    loading="lazy"
                    srcSet="rectangle-34@2x.png"
                    className="size-full absolute inset-0 object-cover"
                  />
                  <div className="bg-indigo-950 max-md:pl-5 relative flex flex-col items-end rounded-3xl pt-12 pr-5 pb-5 pl-16">
                    <div className="max-md:mt-10 mt-24 justify-center rounded-[80px] bg-teal-400 px-4 py-3">
                      PRESS RELEASE
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-md:ml-0 max-md:w-full ml-5 flex w-[32%] flex-col">
              <div className="text-2xl text-slate-800 max-md:mt-10 max-md:max-w-full mt-3 flex flex-col font-medium leading-10">
                <div className="max-md:max-w-full">
                  Class Technologies Inc. Closes $30 Million Series A Financing
                  to Meet High Demand
                </div>
                <div className="max-md:max-w-full mt-9 text-xl leading-9 tracking-wide text-gray-500">
                  Class Technologies Inc., the company that created Class,...
                </div>
                <div className="max-md:mt-10 max-md:max-w-full mt-24">
                  Zoom’s earliest investors are betting millions on a better
                  Zoom for schools
                </div>
                <div className="max-md:mt-10 max-md:max-w-full mt-11 text-xl leading-9 tracking-wide text-gray-500">
                  Zoom was never created to be a consumer product. Nonetheless,
                  the...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-md:max-w-full">
          <div className="max-md:flex-col max-md:gap-0 max-md: flex gap-5">
            <div className="max-md:ml-0 max-md:w-full flex w-[49%] flex-col">
              <div className="max-md:mt-10 max-md:max-w-full flex flex-col text-xl text-gray-500">
                <div className="text-2xl text-slate-800 max-md:max-w-full font-medium leading-10">
                  Class adds $30 million to its balance sheet for a
                  Zoom-friendly edtech solution
                </div>
                <div className="max-md:max-w-full mt-9 leading-9 tracking-wide">
                  Class, launched less than a year ago by Blackboard co-founder
                  Michael Chasen, integrates exclusively...
                </div>
                <div className="max-md:mt-10 max-md:max-w-full mt-11 leading-[180%] tracking-wide underline">
                  Read more
                </div>
              </div>
            </div>
            <div className="max-md:mt-10 flex grow flex-col whitespace-nowrap text-lg tracking-wide text-white">
              <div className="relative flex aspect-[1.4] w-full flex-col justify-center overflow-hidden">
                <img
                  loading="lazy"
                  srcSet="rectangle-37@2x.png"
                  className="size-full absolute inset-0 object-cover"
                />
                <div className="bg-indigo-950 max-md:pl-5 relative flex flex-col items-end rounded-3xl pt-12 pr-5 pb-5 pl-16">
                  <div className="max-md:mt-10 mt-24 justify-center rounded-[80px] bg-teal-400 px-4 py-3">
                    PRESS RELEASE
                  </div>
                </div>
              </div>
            </div>
            <div className="max-md:ml-0 max-md:w-full ml-5 flex w-[32%] flex-col">
              <div className="max-md:mt-10 max-md:max-w-full my-auto flex flex-col self-stretch">
                <div className="text-2xl text-slate-800 max-md:max-w-full font-medium leading-10">
                  Former Blackboard CEO Raises $16M to Bring LMS Features to
                  Zoom Classrooms
                </div>
                <div className="max-md:max-w-full mt-9 text-xl leading-9 tracking-wide text-gray-500">
                  This year, investors have reaped big financial returns from
                  betting on Zoom...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className=" max-md:px-5 max-md:mt-10 max-md:max-w-full mt-10 flex w-full items-center justify-center  bg-gold ">
        <div className="mt-4 flex  max-w-full flex-col items-center">
          <div className="text-2xl flex  max-w-full justify-between gap-5 font-semibold tracking-wider text-white">
            <img
              loading="lazy"
              src={authImg}
              className="aspect-[1.37] w-[114px] max-w-full"
            />
            <div className="h-[83px]  bg-gray-500" />
            <div className="my-auto">Support for Offline Class</div>
          </div>
          <div className="text-2xl text-slate-400 max-md:mt-10 max-md:max-w-full mt-2 text-center font-medium tracking-wider"></div>
          <div className=" mt-6 flex items-center gap-2  ">
            <div className="border-slate-500 text-slate-500 rounded-[80px] border  border-solid px-4 py-2 ">
              Want to get in touch??
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/+2348179361381"
              className="text-2xl  flex items-center justify-center gap-2 rounded-[60px] bg-teal-400 px-4 py-2  font-medium text-white"
            >
              <BsWhatsapp color="green" /> Contact Us
            </a>
          </div>
          <div className="text-2xl text-slate-400 max-md:flex-wrap max-md:mt-10 max-md:mr-2.5 max-md:max-w-full mx-5 mt-5 flex justify-between gap-2 self-stretch text-center tracking-wider">
            <div>Careers</div>
            <div className="h-[23px] w-px bg-gray-500" />
            <div className="flex-auto">Privacy Policy</div>
            <div className="h-[23px] w-px bg-gray-500" />
            <div className="grow whitespace-nowrap">Terms & Conditions</div>
          </div>
          <div className="text-2xl text-slate-400 mt-8  text-center tracking-wider">
            © {Date()} Code Fussion Sol.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
