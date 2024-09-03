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

export default function UsersIndex() {
    return (
        <>
            <Head title="Пользователи" />
            <div className="bg-white shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">
                    <div className="flex justify-between mb-6">
                        <Link href={route("users.create")}>
                            <PrimaryButton>Добавить пользователя</PrimaryButton>
                        </Link>
                        <TextInput
                            placeholder="Поиск по пользователям"
                            className="w-1/3"
                        />
                    </div>
                    <table className="border-collapse border border-slate-400 w-full">
                        <thead>
                            <tr className="bg-slate-200">
                                <th className="border border-slate-400 p-2">
                                    Табельный номер (Логин)
                                </th>
                                <th className="border border-slate-400 p-2">
                                    Фамилия
                                </th>
                                <th className="border border-r-0 border-slate-400 p-2">
                                    Имя
                                </th>

                                <th className="border border-r-0 border-slate-400 p-2">
                                    Роль
                                </th>
                                <th className="border-b border-slate-400 w-9 p-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-slate-50 transition">
                                <td className="border border-slate-400 text-center p-2">
                                    4500
                                </td>
                                <td className="border border-slate-400 text-center p-2">
                                    Сироткин
                                </td>
                                <td className="border border-r-0 border-slate-400 text-center p-2">
                                    Николай
                                </td>

                                <td className="border border-r-0 border-slate-400 text-center p-2">
                                    Администратор
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

UsersIndex.layout = (page) => (
    <AdminLayout children={page} header="Пользователи" />
);
