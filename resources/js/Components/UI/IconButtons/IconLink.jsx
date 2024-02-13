import React from "react";
import { Link } from "@inertiajs/react";

export const IconLink = ({ icon, href, className }) => {
    return (
        <Link
            href={href}
            type="button"
            className={`p-2 text-gray-500 rounded-full transition duration-300 hover:bg-gray-200 leading-none ${className}`}
        >
            {icon}
        </Link>
    );
};
