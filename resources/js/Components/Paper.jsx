import React from "react";

export const Paper = ({ children, className }) => {
    return (
        <div
            className={`bg-white overflow-hidden shadow-sm sm:rounded-lg p-6 mt-4 ${className}`}
        >
            {children}
        </div>
    );
};
