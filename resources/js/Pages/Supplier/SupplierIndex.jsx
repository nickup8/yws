import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import {
    EllipsisVerticalIcon,
    PencilIcon,
    TrashIcon,
    ArrowLongDownIcon,
    ArrowLongUpIcon,
} from "@heroicons/react/24/outline";
import Dropdown from "@/Components/Dropdown";
import SecondaryButton from "@/Components/SecondaryButton";
import Modal from "@/Components/Modal";
import { useState } from "react";
import { space } from "postcss/lib/list";
import TableHeading from "@/Components/TableHeading";
import DeleteButton from "@/Components/DeleteButton";
export default function SupplierIndex({ suppliers, queryParams = null }) {
    queryParams = queryParams || {};
    const [open, setOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [supplierName, setSupplierName] = useState(null);

    const { delete: destroy } = useForm();
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }
        router.get(route("suppliers.index"), queryParams);
    };

    const onKeyPress = (name, event) => {
        if (event.key !== "Enter") return;
        searchFieldChanged(name, event.target.value);
    };

    const modalSupplier = (id, name) => {
        setOpen(true);
        setDeleteId(id);
        setSupplierName(name);
    };

    const deleteSupplier = () => {
        destroy(route("suppliers.destroy", deleteId));
        setOpen(false);
    };
    const sortChanged = (name) => {
        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === "asc") {
                queryParams.sort_direction = "desc";
            } else {
                queryParams.sort_direction = "asc";
            }
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
        }
        router.get(route("suppliers.index"), queryParams);
    };
    const resetFilters = () => {
        router.get(route("suppliers.index"));
    };
    return (
        <>
            <Head title="Поставщики" />
            <div className="p-6 text-gray-900 bg-white rounded-lg">
                <div className="flex justify-between">
                    <Link href={route("suppliers.create")}>
                        <PrimaryButton>Добавить поставщика</PrimaryButton>
                    </Link>
                    <div className="flex space-x-4">
                        <TextInput
                            className="w-64"
                            id="supplier_code"
                            type="text"
                            placeholder="Код поставщика"
                            defaultValue={queryParams.supplier_code}
                            name="supplier_code"
                            onKeyPress={(event) =>
                                onKeyPress("supplier_code", event)
                            }
                        />
                        <TextInput
                            className="w-72"
                            id="supplier_name"
                            type="text"
                            placeholder="Наименование поставщика"
                            defaultValue={queryParams.supplier_name}
                            name="supplier_name"
                            onKeyPress={(event) =>
                                onKeyPress("supplier_name", event)
                            }
                        />
                        <SecondaryButton onClick={resetFilters}>
                            Сбросить фильтры
                        </SecondaryButton>
                    </div>
                </div>
                <div className="mt-4">
                    {suppliers.data.length ? (
                        <table className="border-collapse border border-slate-400 w-full">
                            <thead className="bg-slate-200">
                                <tr>
                                    <TableHeading name="id">№</TableHeading>
                                    <TableHeading
                                        name="supplier_code"
                                        sortChanged={sortChanged}
                                        sort_field={queryParams.sort_field}
                                        sort_direction={
                                            queryParams.sort_direction
                                        }
                                        queryParams={queryParams}
                                        sortable={true}
                                    >
                                        Код поставщика
                                    </TableHeading>
                                    <TableHeading
                                        name="supplier_name"
                                        sortable
                                        sortChanged={sortChanged}
                                        sort_field={queryParams.sort_field}
                                        sort_direction={
                                            queryParams.sort_direction
                                        }
                                        queryParams={queryParams}
                                    >
                                        Наименование поставщика
                                    </TableHeading>
                                    <TableHeading
                                        name="created_at"
                                        sortable
                                        sortChanged={sortChanged}
                                        sort_field={queryParams.sort_field}
                                        sort_direction={
                                            queryParams.sort_direction
                                        }
                                        queryParams={queryParams}
                                    >
                                        Дата создания
                                    </TableHeading>
                                    <th className="border-b border-slate-400 p-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {suppliers.data.map((supplier, index) => {
                                    return (
                                        <tr
                                            className="hover:bg-slate-50 transition"
                                            key={supplier.supplier_code}
                                        >
                                            <td className="border border-slate-400 text-center p-2">
                                                {index + 1}
                                            </td>
                                            <td className="border border-slate-400 text-center p-2">
                                                {supplier.supplier_code}
                                            </td>
                                            <td className="border border-slate-400 text-center p-2">
                                                {supplier.supplier_name}
                                            </td>
                                            <td className="border border-r-0 border-slate-400 text-center p-2">
                                                {new Date(
                                                    supplier.created_at
                                                ).toLocaleDateString("ru-RU", {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                    hour: "numeric",
                                                    minute: "numeric",
                                                })}
                                            </td>
                                            <td className="border-b border-slate-400 p-2">
                                                <div className="flex space-x-2 justify-end">
                                                    <Dropdown>
                                                        <Dropdown.Trigger>
                                                            <EllipsisVerticalIcon className="hover:cursor-pointer w-5" />
                                                        </Dropdown.Trigger>
                                                        <Dropdown.Content>
                                                            <Dropdown.Link
                                                                href={route(
                                                                    "suppliers.edit",
                                                                    supplier.id
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
                                                                    modalSupplier(
                                                                        supplier.id,
                                                                        supplier.supplier_name
                                                                    )
                                                                }
                                                            />
                                                        </Dropdown.Content>
                                                    </Dropdown>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    ) : (
                        <h3 className="text-xl">Поставщиков нет</h3>
                    )}
                </div>
            </div>
            <Modal show={open} maxWidth="2xl" onClose={() => setOpen(false)}>
                <div className="p-6 text-center">
                    <h3 className="text-xl font-medium text-gray-900">
                        Подтвердите удаление поставщика
                    </h3>
                    <p className="mt-1 text-md text-gray-500">
                        Вы уверены, что хотите удалить поставщика{" "}
                        <span className="font-bold text-red-600">
                            {supplierName}
                        </span>{" "}
                        ?
                    </p>
                    <p className="mt-1 text-md text-gray-500">
                        Все связанные данные будут безвозвратно удалены.
                    </p>
                    <div className="mt-6 flex space-x-4 justify-center">
                        <SecondaryButton onClick={() => setOpen(false)}>
                            Отмена
                        </SecondaryButton>

                        <PrimaryButton
                            onClick={deleteSupplier}
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

SupplierIndex.layout = (page) => (
    <AdminLayout children={page} header="Поставщики" />
);
