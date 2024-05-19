import { Link } from "@inertiajs/react";

export default function MenuItem({
    active = false,
    href,
    className = "",
    children,
    icon,
    ...props
}) {
    return (
        <Link
            href={href}
            {...props}
            className={
                "w-full flex py-2 px-3 rounded hover:bg-gray-100 transition duration-200 " +
                className +
                (active ? " bg-gray-200" : "")
            }
        >
            <span className="w-6 h-6 mr-2">{icon}</span>
            <span className="font-semibold">{children}</span>
        </Link>
    );
}
