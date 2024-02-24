import { useRef, useState } from "react";
import NavLink from "./NavLink";
import { MdOutlineDataThresholding } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineWarehouse } from "react-icons/md";
import { MenuButton } from "./UI/Menu/MenuButton";
import { MenuHeadline } from "./UI/Menu/MenuHeadline";

export const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="w-72 overflow-y-auto flex flex-col overflow-hidden py-20 px-3 min-h-screen bg-white">
            <NavLink
                href={route("dashboard")}
                active={route().current("dashboard")}
                icon={<MdOutlineDataThresholding size={24} />}
            >
                Панель мониторинга
            </NavLink>

            <NavLink
                href={route("suppliers.index")}
                active={route().current("suppliers.*")}
                icon={<MdOutlineLocalShipping size={24} />}
            >
                Поставщики
            </NavLink>
        </div>
    );
};
