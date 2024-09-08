import DeleteButton from "@/Components/DeleteButton";
import Dropdown from "@/Components/Dropdown";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TableHeading from "@/Components/TableHeading";
import AdminLayout from "@/Layouts/AdminLayout";
import {
    EllipsisVerticalIcon,
    PencilIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function StorageFeedingIndex({ lists }) {
    const [open, setOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const { delete: destroy } = useForm();
    const deleteStorageFeeding = () => {
        destroy(route("storages_feeding.destroy", deleteId));
        setOpen(false);
    };

    const modalStorages = (id) => {
        setOpen(true);
        setDeleteId(id);
    };

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
                    {lists.data.length ? (
                        <table className="border-collapse border border-slate-400 w-full">
                            <thead>
                                <tr className="bg-slate-200">
                                    <TableHeading>
                                        Название стороны (Rack)
                                    </TableHeading>
                                    <TableHeading>
                                        Количество уровней
                                    </TableHeading>
                                    <TableHeading>
                                        Стартовый уровень
                                    </TableHeading>
                                    <TableHeading>
                                        Номер начальной ячейки
                                    </TableHeading>
                                    <TableHeading>
                                        Номер конечной ячейки
                                    </TableHeading>
                                    <TableHeading>Зона</TableHeading>

                                    <th className="border-b border-slate-400 w-9 p-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {lists.data.map((list, index) => {
                                    return (
                                        <tr
                                            key={index}
                                            className="hover:bg-slate-50 transition"
                                        >
                                            <td className="border border-slate-400 text-center p-2">
                                                {list.rack}
                                            </td>
                                            <td className="border border-slate-400 text-center p-2">
                                                {list.count_lavel}
                                            </td>
                                            <td className="border border-slate-400 text-center p-2">
                                                {list.start_lavel}
                                            </td>
                                            <td className="border border-r-0 border-slate-400 text-center p-2">
                                                {list.start_slot}
                                            </td>
                                            <td className="border border-r-0 border-slate-400 text-center p-2">
                                                {list.end_slot}
                                            </td>
                                            <td className="border border-r-0 border-slate-400 text-center p-2">
                                                {list.area}
                                            </td>
                                            <td className="border-b border-slate-400 p-2">
                                                <Dropdown>
                                                    <Dropdown.Trigger>
                                                        <EllipsisVerticalIcon className="hover:cursor-pointer" />
                                                    </Dropdown.Trigger>
                                                    <Dropdown.Content>
                                                        <Dropdown.Link
                                                            href={route(
                                                                "storages_feeding.edit",
                                                                list.id
                                                            )}
                                                        >
                                                            <span className="flex space-x-2">
                                                                <PencilIcon className="w-5 h-5" />
                                                                <span>
                                                                    Редактировать
                                                                </span>
                                                            </span>
                                                        </Dropdown.Link>
                                                        <DeleteButton
                                                            onClick={() =>
                                                                modalStorages(
                                                                    list.id
                                                                )
                                                            }
                                                        />
                                                    </Dropdown.Content>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    ) : (
                        <h3 className="text-xl">Нет МХ для фидинга</h3>
                    )}
                </div>
            </div>
            <Modal show={open} maxWidth="2xl" onClose={() => setOpen(false)}>
                <div className="p-6 text-center">
                    <h3 className="text-xl font-medium text-gray-900">
                        Подтвердите удаление
                    </h3>
                    <p className="mt-1 text-md text-gray-500">
                        Вы уверены, что хотите удалить МХ на фидинге?
                    </p>
                    <div className="mt-6 flex space-x-4 justify-center">
                        <SecondaryButton onClick={() => setOpen(false)}>
                            Отмена
                        </SecondaryButton>

                        <PrimaryButton
                            onClick={deleteStorageFeeding}
                            className="bg-red-500 hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                            Удалить
                        </PrimaryButton>
                    </div>
                </div>
            </Modal>
        </>
    );
}

StorageFeedingIndex.layout = (page) => (
    <AdminLayout children={page} header="МХ Фидинг" />
);
