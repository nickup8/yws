import React from "react";

export const Table = ({ children }) => {
    return (
        <table className="w-full mt-3 border-collapse border border-slate-400">
            {children}
        </table>
    );
};
