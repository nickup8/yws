import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    icon,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center px-3 rounded text-sm font-medium leading-5 h-10 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "bg-gray-200 text-gray-700"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:text-gray-700 focus:border-gray-300 ") +
                className
            }
        >
            <span className="flex items-center">
                <span className="mr-2">{icon}</span>
                {children}
            </span>
        </Link>
    );
}
