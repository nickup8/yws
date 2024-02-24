import React, { forwardRef } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export const MenuButton = forwardRef(
    ({ children, icon, label, open, ...props }, ref) => {
        return (
            <>
                <button
                    {...props}
                    className={
                        "mb-1 inline-flex items-center justify-between px-3 rounded text-sm font-medium leading-5 h-10 transition duration-150 ease-in-out focus:outline-none text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                    }
                    ref={ref}
                >
                    <span className="flex items-center leading-none">
                        <span className="mr-2">{icon}</span>
                        {label}
                    </span>
                    <span>
                        {open ? (
                            <MdKeyboardArrowUp size={18} />
                        ) : (
                            <MdKeyboardArrowDown size={18} />
                        )}
                    </span>
                </button>
                {open && children}
            </>
        );
    }
);
