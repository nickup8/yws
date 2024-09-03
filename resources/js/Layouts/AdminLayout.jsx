import Header from "@/Components/Header";
import SideBar from "@/Components/SideBar";
import { useState } from "react";

export default function AdminLayout({ children, header }) {
    const [open, setOpen] = useState(true);
    return (
        <div className="bg-gray-200 min-h-screen py-4">
            <SideBar />
            <Header open={open} header={header} />
            <main
                className={
                    "mt-4 mr-4 flex flex-col justify-between h-full" +
                    (open ? " ml-64" : "ml-4")
                }
            >
                <div className="grow">{children}</div>
            </main>
        </div>
    );
}
