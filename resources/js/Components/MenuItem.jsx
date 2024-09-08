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
        <>
            {!icon && <div className="border-b border-gray-300 w-4 "></div>}
            <Link
                href={href}
                {...props}
                className={
                    "w-full flex items-center py-2 px-3 rounded hover:bg-gray-100 transition duration-200 " +
                    className +
                    (active ? " bg-gray-200 " : "") +
                    (icon ? " pl-3" : "")
                }
            >
                {icon && <span className="w-6 h-6 mr-2">{icon}</span>}

                <div className="flex items-center">
                    <span className={"font-semibold "}>{children}</span>
                </div>
            </Link>
        </>
    );
}
