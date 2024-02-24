import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Head, Link } from "@inertiajs/react";
import { Sidebar } from "@/Components/Sidebar";

export default function Authenticated({ user, header, children, title }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const [driwerOpen, setDriwerOpen] = useState(true);
    const handleDriwerOpen = () => [setDriwerOpen(!driwerOpen)];
    return (
        <>
            <Head title={title} />
            <div className=" bg-gray-100">
                <nav className="bg-white border-b border-gray-100 fixed top-0 w-full z-50">
                    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="shrink-0 flex items-center">
                                    <button
                                        className="mr-3"
                                        onClick={handleDriwerOpen}
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M24 11.0005H0V13.0005H24V11.0005Z"
                                                fill="#00000E"
                                            />
                                            <path
                                                d="M24 4.00024H0V6.00024H24V4.00024Z"
                                                fill="#00000E"
                                            />
                                            <path
                                                d="M24 18H0V20H24V18Z"
                                                fill="#00000E"
                                            />

                                            <defs>
                                                <clipPath id="clip0_46_9">
                                                    <rect
                                                        width="20"
                                                        height="20"
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                    <ApplicationLogo className="block h-auto w-32 fill-current text-gray-800" />
                                </div>
                            </div>

                            <div className="hidden sm:flex sm:items-center sm:ms-6">
                                <div className="ms-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    <span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full mr-2 font-bold">
                                                        {user.name[0] +
                                                            user.lastname[0]}
                                                    </span>
                                                    <span>
                                                        {user.name +
                                                            " " +
                                                            user.lastname}
                                                    </span>

                                                    <svg
                                                        className="ms-2 -me-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Профиль
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Выйти
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="flex ">
                    {driwerOpen && <Sidebar className={"fixed"} />}
                    <main className="w-full pt-20 min-h-screen overflow-auto grow">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
}
