import { Link } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";
import MenuItem from "./MenuItem";
import {
    ClipboardDocumentIcon,
    HomeModernIcon,
    PresentationChartLineIcon,
    WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

export default function SideBar() {
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
                    <MenuItem icon={<PresentationChartLineIcon />}>
                        Фидинг
                    </MenuItem>
                    <MenuItem icon={<ClipboardDocumentIcon />}>
                        Документы
                    </MenuItem>
                    <MenuItem icon={<WrenchScrewdriverIcon />}>
                        Настройки
                    </MenuItem>
                </div>
            </div>
            <div className="w-full flex-none text-center text-xs text-gray-400 mt-6">
                <div>ЯзакиВолга - управление проводами</div>
                <div> {new Date().getFullYear()} - Версия: 0.0.1</div>
            </div>
        </div>
    );
}
