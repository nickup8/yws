import Dropdown from "@/Components/Dropdown";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import {
    Cog8ToothIcon,
    EllipsisVerticalIcon,
    PencilIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";

export default function MachineIndex() {
    return (
        <>
            <Head title="Оборудование" />

            <div className="bg-white shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">
                    <div className="flex justify-between mb-4">
                        <Link href={route("machines.create")}>
                            <PrimaryButton>Добавить оборудование</PrimaryButton>
                        </Link>
                        <TextInput />
                    </div>
                    <table className="border-collapse border border-slate-400 w-full">
                        <thead>
                            <tr className="bg-slate-200">
                                <th className="border border-slate-400 p-2">
                                    Название оборудования
                                </th>
                                <th className="border border-slate-400 p-2">
                                    Проект
                                </th>
                                <th className="border border-r-0 border-slate-400 w-20 p-2">
                                    Зона
                                </th>
                                <th className="border-b border-slate-400 w-9 p-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-slate-50 transition">
                                <td className="border border-slate-400 text-center p-2">
                                    01-330-0085
                                </td>
                                <td className="border border-slate-400 text-center p-2">
                                    VAZ
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
                                            <Dropdown.Link
                                                href={route(
                                                    "machines.settings"
                                                )}
                                            >
                                                <span className="flex space-x-2">
                                                    <Cog8ToothIcon className="w-5 h-5" />
                                                    <span>Настройки</span>
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link>
                                                <span className="flex space-x-2">
                                                    <PencilIcon className="w-5 h-5" />
                                                    <span>Редактировать</span>
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link>
                                                <span className="flex space-x-2 text-red-500 hover:text-red-600 transition ">
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
                                    01-330-0085
                                </td>
                                <td className="border border-slate-400 text-center p-2">
                                    VAZ
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
                                                    <Cog8ToothIcon className="w-5 h-5" />
                                                    <span>Настройки</span>
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link>
                                                <span className="flex space-x-2">
                                                    <PencilIcon className="w-5 h-5" />
                                                    <span>Редактировать</span>
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link>
                                                <span className="flex space-x-2 text-red-500 hover:text-red-600 transition ">
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
                                    01-330-0085
                                </td>
                                <td className="border border-slate-400 text-center p-2">
                                    VAZ
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
                                                    <Cog8ToothIcon className="w-5 h-5" />
                                                    <span>Настройки</span>
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link>
                                                <span className="flex space-x-2">
                                                    <PencilIcon className="w-5 h-5" />
                                                    <span>Редактировать</span>
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link>
                                                <span className="flex space-x-2 text-red-500 hover:text-red-600 transition ">
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
                                    01-330-0085
                                </td>
                                <td className="border border-slate-400 text-center p-2">
                                    VAZ
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
                                                    <Cog8ToothIcon className="w-5 h-5" />
                                                    <span>Настройки</span>
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link>
                                                <span className="flex space-x-2">
                                                    <PencilIcon className="w-5 h-5" />
                                                    <span>Редактировать</span>
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link>
                                                <span className="flex space-x-2 text-red-500 hover:text-red-600 transition ">
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
                                    01-330-0085
                                </td>
                                <td className="border border-slate-400 text-center p-2">
                                    VAZ
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
                                                    <Cog8ToothIcon className="w-5 h-5" />
                                                    <span>Настройки</span>
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link>
                                                <span className="flex space-x-2">
                                                    <PencilIcon className="w-5 h-5" />
                                                    <span>Редактировать</span>
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link>
                                                <span className="flex space-x-2 text-red-500 hover:text-red-600 transition ">
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
                                    01-330-0085
                                </td>
                                <td className="border border-slate-400 text-center p-2">
                                    VAZ
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
                                                    <Cog8ToothIcon className="w-5 h-5" />
                                                    <span>Настройки</span>
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link>
                                                <span className="flex space-x-2">
                                                    <PencilIcon className="w-5 h-5" />
                                                    <span>Редактировать</span>
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link>
                                                <span className="flex space-x-2 text-red-500 hover:text-red-600 transition ">
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
                                    01-330-0085
                                </td>
                                <td className="border border-slate-400 text-center p-2">
                                    VAZ
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
                                                    <Cog8ToothIcon className="w-5 h-5" />
                                                    <span>Настройки</span>
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link>
                                                <span className="flex space-x-2">
                                                    <PencilIcon className="w-5 h-5" />
                                                    <span>Редактировать</span>
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link>
                                                <span className="flex space-x-2 text-red-500 hover:text-red-600 transition ">
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
                                    01-330-0085
                                </td>
                                <td className="border border-slate-400 text-center p-2">
                                    VAZ
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
                                                    <Cog8ToothIcon className="w-5 h-5" />
                                                    <span>Настройки</span>
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link>
                                                <span className="flex space-x-2">
                                                    <PencilIcon className="w-5 h-5" />
                                                    <span>Редактировать</span>
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link>
                                                <span className="flex space-x-2 text-red-500 hover:text-red-600 transition ">
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
                                    01-330-0085
                                </td>
                                <td className="border border-slate-400 text-center p-2">
                                    VAZ
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
                                                    <Cog8ToothIcon className="w-5 h-5" />
                                                    <span>Настройки</span>
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link>
                                                <span className="flex space-x-2">
                                                    <PencilIcon className="w-5 h-5" />
                                                    <span>Редактировать</span>
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link>
                                                <span className="flex space-x-2 text-red-500 hover:text-red-600 transition ">
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
                                    01-330-0085
                                </td>
                                <td className="border border-slate-400 text-center p-2">
                                    VAZ
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
                                                    <Cog8ToothIcon className="w-5 h-5" />
                                                    <span>Настройки</span>
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link>
                                                <span className="flex space-x-2">
                                                    <PencilIcon className="w-5 h-5" />
                                                    <span>Редактировать</span>
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link>
                                                <span className="flex space-x-2 text-red-500 hover:text-red-600 transition ">
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

MachineIndex.layout = (page) => (
    <AdminLayout children={page} header="Оборудование" />
);
