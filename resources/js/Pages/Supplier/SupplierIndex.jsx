import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import {
    EllipsisVerticalIcon,
    EyeIcon,
    PencilIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import Dropdown from "@/Components/Dropdown";

export default function SupplierIndex() {
    return (
        <>
            <Head title="Поставщики" />
            <div className="p-6 text-gray-900 bg-white rounded-lg">
                <div className="flex justify-between">
                    <Link href={route("suppliers.create")}>
                        <PrimaryButton>Добавить поставщика</PrimaryButton>
                    </Link>
                    <TextInput placeholder="Поиск по поставщикам" />
                </div>
                <div className="mt-4">
                    <table className="w-full border border-collapse border-slate-400">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="border border-slate-300 p-2">
                                    №
                                </th>
                                <th className="border border-slate-300 p-2">
                                    Код поставщика
                                </th>
                                <th className="border border-slate-300 p-2">
                                    Наименование поставщика
                                </th>
                                <th className="border border-slate-300 p-2">
                                    Дата создания
                                </th>
                                <th className="border border-slate-300 p-2 text-right w-8"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-100 transition">
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2">
                                    <div className="flex space-x-2 justify-end">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <EllipsisVerticalIcon className="w-5 h-5" />
                                            </Dropdown.Trigger>
                                            <Dropdown.Content>
                                                <Dropdown.Link
                                                    href={route("profile.edit")}
                                                >
                                                    <span className="flex items-center">
                                                        <EyeIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Подробнее
                                                    </span>
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    method="post"
                                                    href={route("logout")}
                                                    as="button"
                                                >
                                                    <span className="flex items-center">
                                                        <PencilIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Редактировать
                                                    </span>
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    method="post"
                                                    href={route("logout")}
                                                    as="button"
                                                >
                                                    <span className="flex items-center">
                                                        <TrashIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Удалить
                                                    </span>
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-100 transition">
                                <td className="border border-slate-300 p-2 text-center">
                                    2
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2">
                                    <div className="flex space-x-2 justify-end">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <EllipsisVerticalIcon className="w-5 h-5" />
                                            </Dropdown.Trigger>
                                            <Dropdown.Content>
                                                <Dropdown.Link
                                                    href={route("profile.edit")}
                                                >
                                                    <span className="flex items-center">
                                                        <EyeIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Подробнее
                                                    </span>
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    method="post"
                                                    href={route("logout")}
                                                    as="button"
                                                >
                                                    <span className="flex items-center">
                                                        <PencilIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Редактировать
                                                    </span>
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    method="post"
                                                    href={route("logout")}
                                                    as="button"
                                                >
                                                    <span className="flex items-center">
                                                        <TrashIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Удалить
                                                    </span>
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-100 transition">
                                <td className="border border-slate-300 p-2 text-center">
                                    3
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2">
                                    <div className="flex space-x-2 justify-end">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <EllipsisVerticalIcon className="w-5 h-5" />
                                            </Dropdown.Trigger>
                                            <Dropdown.Content>
                                                <Dropdown.Link
                                                    href={route("profile.edit")}
                                                >
                                                    <span className="flex items-center">
                                                        <EyeIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Подробнее
                                                    </span>
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    method="post"
                                                    href={route("logout")}
                                                    as="button"
                                                >
                                                    <span className="flex items-center">
                                                        <PencilIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Редактировать
                                                    </span>
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    method="post"
                                                    href={route("logout")}
                                                    as="button"
                                                >
                                                    <span className="flex items-center">
                                                        <TrashIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Удалить
                                                    </span>
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-100 transition">
                                <td className="border border-slate-300 p-2 text-center">
                                    4
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2">
                                    <div className="flex space-x-2 justify-end">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <EllipsisVerticalIcon className="w-5 h-5" />
                                            </Dropdown.Trigger>
                                            <Dropdown.Content>
                                                <Dropdown.Link
                                                    href={route("profile.edit")}
                                                >
                                                    <span className="flex items-center">
                                                        <EyeIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Подробнее
                                                    </span>
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    method="post"
                                                    href={route("logout")}
                                                    as="button"
                                                >
                                                    <span className="flex items-center">
                                                        <PencilIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Редактировать
                                                    </span>
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    method="post"
                                                    href={route("logout")}
                                                    as="button"
                                                >
                                                    <span className="flex items-center">
                                                        <TrashIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Удалить
                                                    </span>
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-100 transition">
                                <td className="border border-slate-300 p-2 text-center">
                                    5
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2">
                                    <div className="flex space-x-2 justify-end">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <EllipsisVerticalIcon className="w-5 h-5" />
                                            </Dropdown.Trigger>
                                            <Dropdown.Content>
                                                <Dropdown.Link
                                                    href={route("profile.edit")}
                                                >
                                                    <span className="flex items-center">
                                                        <EyeIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Подробнее
                                                    </span>
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    method="post"
                                                    href={route("logout")}
                                                    as="button"
                                                >
                                                    <span className="flex items-center">
                                                        <PencilIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Редактировать
                                                    </span>
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    method="post"
                                                    href={route("logout")}
                                                    as="button"
                                                >
                                                    <span className="flex items-center">
                                                        <TrashIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Удалить
                                                    </span>
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-100 transition">
                                <td className="border border-slate-300 p-2 text-center">
                                    6
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2">
                                    <div className="flex space-x-2 justify-end">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <EllipsisVerticalIcon className="w-5 h-5" />
                                            </Dropdown.Trigger>
                                            <Dropdown.Content>
                                                <Dropdown.Link
                                                    href={route("profile.edit")}
                                                >
                                                    <span className="flex items-center">
                                                        <EyeIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Подробнее
                                                    </span>
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    method="post"
                                                    href={route("logout")}
                                                    as="button"
                                                >
                                                    <span className="flex items-center">
                                                        <PencilIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Редактировать
                                                    </span>
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    method="post"
                                                    href={route("logout")}
                                                    as="button"
                                                >
                                                    <span className="flex items-center">
                                                        <TrashIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Удалить
                                                    </span>
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-100 transition">
                                <td className="border border-slate-300 p-2 text-center">
                                    7
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2">
                                    <div className="flex space-x-2 justify-end">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <EllipsisVerticalIcon className="w-5 h-5" />
                                            </Dropdown.Trigger>
                                            <Dropdown.Content>
                                                <Dropdown.Link
                                                    href={route("profile.edit")}
                                                >
                                                    <span className="flex items-center">
                                                        <EyeIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Подробнее
                                                    </span>
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    method="post"
                                                    href={route("logout")}
                                                    as="button"
                                                >
                                                    <span className="flex items-center">
                                                        <PencilIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Редактировать
                                                    </span>
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    method="post"
                                                    href={route("logout")}
                                                    as="button"
                                                >
                                                    <span className="flex items-center">
                                                        <TrashIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Удалить
                                                    </span>
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-100 transition">
                                <td className="border border-slate-300 p-2 text-center">
                                    8
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2">
                                    <div className="flex space-x-2 justify-end">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <EllipsisVerticalIcon className="w-5 h-5" />
                                            </Dropdown.Trigger>
                                            <Dropdown.Content>
                                                <Dropdown.Link
                                                    href={route("profile.edit")}
                                                >
                                                    <span className="flex items-center">
                                                        <EyeIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Подробнее
                                                    </span>
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    method="post"
                                                    href={route("logout")}
                                                    as="button"
                                                >
                                                    <span className="flex items-center">
                                                        <PencilIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Редактировать
                                                    </span>
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    method="post"
                                                    href={route("logout")}
                                                    as="button"
                                                >
                                                    <span className="flex items-center">
                                                        <TrashIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Удалить
                                                    </span>
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-100 transition">
                                <td className="border border-slate-300 p-2 text-center">
                                    9
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2">
                                    <div className="flex space-x-2 justify-end">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <EllipsisVerticalIcon className="w-5 h-5" />
                                            </Dropdown.Trigger>
                                            <Dropdown.Content>
                                                <Dropdown.Link
                                                    href={route("profile.edit")}
                                                >
                                                    <span className="flex items-center">
                                                        <EyeIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Подробнее
                                                    </span>
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    method="post"
                                                    href={route("logout")}
                                                    as="button"
                                                >
                                                    <span className="flex items-center">
                                                        <PencilIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Редактировать
                                                    </span>
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    method="post"
                                                    href={route("logout")}
                                                    as="button"
                                                >
                                                    <span className="flex items-center">
                                                        <TrashIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Удалить
                                                    </span>
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-100 transition">
                                <td className="border border-slate-300 p-2 text-center">
                                    10
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 p-2">
                                    <div className="flex space-x-2 justify-end">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <EllipsisVerticalIcon className="w-5 h-5" />
                                            </Dropdown.Trigger>
                                            <Dropdown.Content>
                                                <Dropdown.Link
                                                    href={route("profile.edit")}
                                                >
                                                    <span className="flex items-center">
                                                        <EyeIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Подробнее
                                                    </span>
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    method="post"
                                                    href={route("logout")}
                                                    as="button"
                                                >
                                                    <span className="flex items-center">
                                                        <PencilIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Редактировать
                                                    </span>
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    method="post"
                                                    href={route("logout")}
                                                    as="button"
                                                >
                                                    <span className="flex items-center">
                                                        <TrashIcon className="w-5 h-5 mr-2 text-gray-400" />
                                                        Удалить
                                                    </span>
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

SupplierIndex.layout = (page) => (
    <AdminLayout children={page} header="Поставщики" />
);
