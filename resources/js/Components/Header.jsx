import { usePage } from "@inertiajs/react";
import Dropdown from "./Dropdown";
import {
    ArrowRightEndOnRectangleIcon,
    ChevronDownIcon,
    UserCircleIcon,
} from "@heroicons/react/24/outline";

export default function Header({ open, header }) {
    const user = usePage().props.auth.user;
    return (
        <div
            className={
                "flex items-center justify-between bg-gray-800 text-gray-200 p-6 shadow-sm rounded-lg mr-4 " +
                (open ? " ml-64" : "ml-4")
            }
        >
            <div>
                <h2 className="font-bold text-xl leading-tight">{header}</h2>
            </div>
            <Dropdown>
                <Dropdown.Trigger>
                    <div className="flex text-gray-100 items-center cursor-pointer hover:text-gray-400 transition duration-200">
                        <span className="w-10 h-10 font-bold rounded-full flex items-center justify-center mr-1 text-gray-800 bg-gray-200">
                            {user.last_name[0]}
                            {user.first_name[0]}
                        </span>
                        <span className="flex items-center">
                            {user.last_name} {user.first_name}
                            <ChevronDownIcon className="w-4 h-4 ml-1 text-gray-400" />
                        </span>
                    </div>
                </Dropdown.Trigger>
                <Dropdown.Content>
                    <Dropdown.Link href={route("profile.edit")}>
                        <span className="flex items-center">
                            <UserCircleIcon className="w-6 h-6 mr-1 text-gray-400" />
                            Профиль
                        </span>
                    </Dropdown.Link>
                    <Dropdown.Link
                        method="post"
                        href={route("logout")}
                        as="button"
                    >
                        <span className="flex items-center">
                            <ArrowRightEndOnRectangleIcon className="w-6 h-6 mr-1 text-gray-400" />
                            Выйти
                        </span>
                    </Dropdown.Link>
                </Dropdown.Content>
            </Dropdown>
        </div>
    );
}
