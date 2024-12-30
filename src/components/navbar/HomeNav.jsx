import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import authImg from "assets/img/auth/auth.png";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../../redux/api/usersApiSlice";
import { logout } from "../../redux/features/auth/authSlice";
import Dropdown from "components/dropdown";

const navigation = [
  { name: "Dashboard", href: "/admin", current: true },
  { name: "School Signup", href: "/auth/signup" },
  { name: "Teachers Login", href: "/auth/login" },
  {
    name: "Download App",
    href: "https://trenova.nyc3.cdn.digitaloceanspaces.com/1app/app-release.apk",
    current: true,
  },
  {
    name: "MentorNigeria", 
    href: "/MentorNigeria",
  },
  {
    name: "School Growth System",
    href: "/schoolgrowthsystem/trenova",
  },
  {
    name: "Career", 
    // href: "/career/territory_sales_representative",
    children: {
      career1: {
        name: 'Terittory Sales Representative',
        href: '/career/territory_sales_representative',
      },
      career2: {
        name: 'Sales Officer',
        href: '/career/sales_officer',
      },
    },
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HomeNav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logOutApi] = useLogoutMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    try {
      logOutApi();
      dispatch(logout());
      navigate("/auth/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Disclosure
      as="nav"
      className=" sticky top-0 z-50 w-full bg-gold   shadow-xl"
    >
      {({ open }) => (
        <>
          <div className="mx-auto w-full px-2 sm:px-10 lg:px-20">
            <div className="relative flex h-16 items-center justify-between sm:h-20">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start gap-5">
                <div className=" hidden flex-shrink-0  items-center sm:flex" style={{backgroundColor: 'white', borderRadius: '12px'}}>
                  <img className="w-16" src={authImg} alt="Logo" style={{objectFit: 'cover'}}/>
                </div>
                <div className="hidden flex-shrink-0  items-center sm:flex">

                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      item.children? (
                        <Dropdown
                          button={
                            <Link
                              key={item.name}
                              className={classNames(
                                item.current
                                  ? "bg-gray-900 text-white"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "text-sm rounded-md px-3 py-2 font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </Link>
                          }
                          children={
                            <div className="flex w-56 flex-col justify-start rounded-[5px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">

                              <div className="flex flex-col py-2">
                                <Link
                                  to={item.children.career1.href}
                                  className="text-sm px-2 py-1 text-gray-800 dark:text-white hover:dark:text-white"
                                >
                                  {item.children.career1.name}
                                </Link>

                                <div className="h-px w-full my-1 bg-gray-200 dark:bg-white/20 " />

                                <Link
                                  to={item.children.career2.href}
                                  className="text-sm px-2 py-1 text-gray-800 dark:text-white hover:dark:text-white"
                                >
                                  {item.children.career2.name}
                                </Link>
                              </div>
                            </div>
                          }
                          classNames={"py-2 top-8 -left-[180px] w-max"}
                        />
                      ):(
                        <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "text-sm rounded-md px-3 py-2 font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                      )
                      
                    ))}
                  </div>

                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  {/* <div>
                    <Menu.Button className="text-sm relative flex rounded-full bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div> */}

                  {userInfo ? (
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/admin/profile"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "text-sm block px-4 py-2 text-gray-700"
                              )}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              onClick={logoutHandler}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "text-sm block px-4 py-2 text-gray-700"
                              )}
                            >
                              Sign out
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  ) : null}
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                item.children ? (
                  <>
                    {Object.keys(item.children).map((key) => (
                      <Disclosure.Button
                        key={item.children[key].name}
                        as="a"
                        href={item.children[key].href}
                        className={classNames(
                          item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "text-base block rounded-md px-3 py-2 font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.children[key].name}
                      </Disclosure.Button>
                    ))}
                  </>
                ) : (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "text-base block rounded-md px-3 py-2 font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                )
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
