import { Link, usePage } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";
import MenuItem from "./MenuItem";
import {
    ChevronDownIcon,
    ClipboardDocumentIcon,
    HashtagIcon,
    HomeModernIcon,
    PresentationChartLineIcon,
    WrenchScrewdriverIcon,
    ChevronUpIcon,
    TruckIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import Collaps from "./Collaps";

export default function SideBar() {
    const [settingsOpen, setSettingsOpen] = useState(
        sessionStorage.getItem("settingsOpen") === "true"
    );
    const [documentsOpen, setDocumentsOpen] = useState(
        sessionStorage.getItem("documentsOpen") === "true"
    );

    const user = usePage().props.auth.user;

    const toggleSettings = () => {
        setSettingsOpen(!settingsOpen);
        sessionStorage.setItem("settingsOpen", !settingsOpen);
    };
    const toggleDocuments = () => {
        setDocumentsOpen(!documentsOpen);
        sessionStorage.setItem("documentsOpen", !documentsOpen);
    };
    return (
        <div className="shadow-sm p-4 fixed top-0 left-0 flex flex-col justify-between w-60 min-h-screen h-full overflow-y-auto overflow-x-hidden bg-white">
            <div>
                <ApplicationLogo className="w-48 fill-current text-gray-800 pt-4" />
                <div className="mt-4 flex flex-col space-y-1">
                    <MenuItem
                        href={route("dashboard")}
                        icon={<PresentationChartLineIcon />}
                        active={route().current("dashboard")}
                    >
                        Панель
                    </MenuItem>
                    <MenuItem icon={<HomeModernIcon />}>Склад</MenuItem>
                    <MenuItem icon={<HashtagIcon />}>Фидинг</MenuItem>
                    {(user.roles[0].name === "Администратор" ||
                        user.roles[0].name === "Логистика") && (
                        <Collaps
                            open={documentsOpen}
                            icon={<ClipboardDocumentIcon />}
                            title="Документы"
                            setOpen={toggleDocuments}
                        >
                            <MenuItem>Накладные</MenuItem>
                        </Collaps>
                    )}
                    <Collaps
                        open={settingsOpen}
                        icon={<WrenchScrewdriverIcon />}
                        title="Настройки"
                        setOpen={toggleSettings}
                    >
                        {(user.roles[0].name === "Администратор" ||
                            user.roles[0].name === "Логистика") && (
                            <MenuItem
                                active={route().current("suppliers.*")}
                                href={route("suppliers.index")}
                            >
                                Поставщики
                            </MenuItem>
                        )}
                        {user.roles[0].name === "Администратор" && (
                            <MenuItem
                                active={route().current("users.*")}
                                href={route("users.index")}
                            >
                                Пользователи
                            </MenuItem>
                        )}
                        <MenuItem
                            active={route().current("machines.*")}
                            href={route("machines.index")}
                        >
                            Оборудование
                        </MenuItem>
                        <MenuItem href={route("machines.index")}>
                            Склады
                        </MenuItem>
                        <MenuItem>МХ склад</MenuItem>
                        <MenuItem
                            active={route().current("storages_feeding.*")}
                            href={route("storages_feeding.index")}
                        >
                            МХ фидинг
                        </MenuItem>
                    </Collaps>
                </div>
            </div>
            <div className="w-full flex-none text-center text-xs text-gray-400 mt-6">
                <div>ЯзакиВолга - фидинг система</div>
                <div> {new Date().getFullYear()} - Версия: 0.0.1</div>
            </div>
        </div>
    );
}
