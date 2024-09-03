import Dropdown from "@/Components/Dropdown";
import PrimaryButton from "@/Components/PrimaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import {
    EllipsisVerticalIcon,
    PencilIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";

export default function StorageFeedingIndex() {
    return (
        <>
            <Head title="МХ Фидинг" />
            <div className="bg-white shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">
                    <div className="flex justify-between mb-6">
                        <Link href={route("storages_feeding.create")}>
                            <PrimaryButton>
                                Добавить МХ для фидинга
                            </PrimaryButton>
                        </Link>
                    </div>
                    <table className="border-collapse border border-slate-400 w-full">
                        <thead>
                            <tr className="bg-slate-200">
                                <th className="border border-slate-400 p-2">
                                    Название стороны (Rack)
                                </th>
                                <th className="border border-slate-400 p-2">
                                    Количесвто уровней
                                </th>
                                <th className="border border-slate-400 p-2">
                                    Стартовый уровень
                                </th>

                                <th className="border border-r-0 border-slate-400 p-2">
                                    Номер начальной ячейки
                                </th>
                                <th className="border border-r-0 border-slate-400 p-2">
                                    Номер конечной ячейки
                                </th>
                                <th className="border border-r-0 border-slate-400 p-2">
                                    Зона
                                </th>
                                <th className="border-b border-slate-400 w-9 p-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-slate-50 transition">
                                <td className="border border-slate-400 text-center p-2">
                                    A
                                </td>
                                <td className="border border-slate-400 text-center p-2">
                                    5
                                </td>
                                <td className="border border-slate-400 text-center p-2">
                                    1
                                </td>
                                <td className="border border-r-0 border-slate-400 text-center p-2">
                                    1
                                </td>
                                <td className="border border-r-0 border-slate-400 text-center p-2">
                                    30
                                </td>
                                <td className="border border-r-0 border-slate-400 text-center p-2">
                                    1
                                </td>
                                <td className="border-b border-slate-400 p-2">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <EllipsisVerticalIcon className="hover:cursor-pointer" />
                                        </Dropdown.Trigger>
                                        <Dropdown.Content>
                                            <Dropdown.Link>
                                                <span className="flex space-x-2">
                                                    <PencilIcon className="w-5 h-5" />
                                                    <span>Редактировать</span>
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link>
                                                <span className="flex space-x-2 text-red-500">
                                                    <TrashIcon className="w-5 h-5" />
                                                    <span>Удалить</span>
                                                </span>
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr className="hover:bg-slate-50 transition">
                                <td className="border border-slate-400 text-center p-2">
                                    B
                                </td>
                                <td className="border border-slate-400 text-center p-2">
                                    5
                                </td>
                                <td className="border border-slate-400 text-center p-2">
                                    3
                                </td>
                                <td className="border border-r-0 border-slate-400 text-center p-2">
                                    1
                                </td>
                                <td className="border border-r-0 border-slate-400 text-center p-2">
                                    30
                                </td>
                                <td className="border border-r-0 border-slate-400 text-center p-2">
                                    1
                                </td>
                                <td className="border-b border-slate-400 p-2">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <EllipsisVerticalIcon className="hover:cursor-pointer" />
                                        </Dropdown.Trigger>
                                        <Dropdown.Content>
                                            <Dropdown.Link>
                                                <span className="flex space-x-2">
                                                    <PencilIcon className="w-5 h-5" />
                                                    <span>Редактировать</span>
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link>
                                                <span className="flex space-x-2 text-red-500">
                                                    <TrashIcon className="w-5 h-5" />
                                                    <span>Удалить</span>
                                                </span>
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

StorageFeedingIndex.layout = (page) => (
    <AdminLayout children={page} header="МХ Фидинг" />
);
