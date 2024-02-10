import { Link } from "@inertiajs/react";
import React from "react";
import NavLink from "./NavLink";

export const Sidebar = () => {
    return (
        <div className="w-60 grow overflow-y-auto flex flex-col overflow-hidden py-6 px-3 h-screen bg-white">
            <NavLink
                href={route("dashboard")}
                active={route().current("dashboard")}
            >
                Панель мониторинга
            </NavLink>
            <NavLink
                href={route("suppliers.index")}
                active={route().current("suppliers")}
            >
                Поставщики
            </NavLink>
        </div>
    );
};
