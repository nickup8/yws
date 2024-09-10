import Dropdown from "@/Components/Dropdown";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TableHeading from "@/Components/TableHeading";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import {
    Cog8ToothIcon,
    EllipsisVerticalIcon,
    PencilIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import { Head, Link, router, useForm } from "@inertiajs/react";

export default function MachineIndex({ machines, queryParams = null }) {
    queryParams = queryParams || {};
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        project: "",
        area: "",
    });
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
        router.get(route("machines.index"), queryParams);
    };
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }
        router.get(route("machines.index"), queryParams);
    };
    const onKeyPress = (name, event) => {
        if (event.key !== "Enter") return;
        searchFieldChanged(name, event.target.value);
    };

    const resetFilters = () => {
        router.get(route("machines.index"));
    };
    return (
        <>
            <Head title="Оборудование" />

            <div className="bg-white shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">
                    <div className="flex justify-between mb-4">
                        <Link href={route("machines.create")}>
                            <PrimaryButton>Добавить оборудование</PrimaryButton>
                        </Link>
                        <div className="flex space-x-2">
                            <TextInput
                                name="name"
                                defaultValue={queryParams.name}
                                placeholder="Поиск оборудования по названию"
                                className="w-80"
                                onKeyPress={(event) =>
                                    onKeyPress("name", event)
                                }
                            />
                            <TextInput
                                name="project"
                                defaultValue={queryParams.project}
                                placeholder="Поиск оборудования по проекту"
                                className="w-80"
                                onKeyPress={(event) =>
                                    onKeyPress("project", event)
                                }
                            />
                            <TextInput
                                name="area"
                                defaultValue={queryParams.area}
                                placeholder="Поиск оборудования по зоне"
                                className="w-80"
                                onKeyPress={(event) =>
                                    onKeyPress("area", event)
                                }
                            />
                            <SecondaryButton onClick={resetFilters}>
                                Сбросить фильтры
                            </SecondaryButton>
                        </div>
                    </div>
                    {machines.data.length ? (
                        <table className="border-collapse border border-slate-400 w-full">
                            <thead>
                                <tr className="bg-slate-200">
                                    <TableHeading
                                        sortChanged={sortChanged}
                                        name="name"
                                        sort_field={queryParams.sort_field}
                                        sort_direction={
                                            queryParams.sort_direction
                                        }
                                        sortable={true}
                                        queryParams={queryParams}
                                    >
                                        Название оборудования
                                    </TableHeading>
                                    <TableHeading
                                        name="project"
                                        sortable
                                        sortChanged={sortChanged}
                                        sort_field={queryParams.sort_field}
                                        sort_direction={
                                            queryParams.sort_direction
                                        }
                                        queryParams={queryParams}
                                    >
                                        Проект
                                    </TableHeading>
                                    <TableHeading
                                        name="area"
                                        sortable
                                        sortChanged={sortChanged}
                                        sort_field={queryParams.sort_field}
                                        sort_direction={
                                            queryParams.sort_direction
                                        }
                                        queryParams={queryParams}
                                    >
                                        Зона
                                    </TableHeading>
                                    <th className="border-b border-slate-400 w-9 p-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {machines.data.map((machine, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-slate-50 transition"
                                    >
                                        <td className="border border-slate-400 text-center p-2">
                                            {machine.name}
                                        </td>
                                        <td className="border border-slate-400 text-center p-2">
                                            {machine.project}
                                        </td>
                                        <td className="border border-r-0 border-slate-400 text-center p-2">
                                            Зона {machine.area}
                                        </td>
                                        <td className="border-b border-slate-400 p-2">
                                            <Dropdown>
                                                <Dropdown.Trigger>
                                                    <EllipsisVerticalIcon className="hover:cursor-pointer" />
                                                </Dropdown.Trigger>
                                                <Dropdown.Content>
                                                    <Dropdown.Link
                                                        href={route(
                                                            "machines.settings",
                                                            "2"
                                                        )}
                                                    >
                                                        <span className="flex space-x-2">
                                                            <Cog8ToothIcon className="w-5 h-5" />
                                                            <span>
                                                                Настройки
                                                            </span>
                                                        </span>
                                                    </Dropdown.Link>
                                                    <Dropdown.Link
                                                        href={route(
                                                            "machines.edit",
                                                            machine.id
                                                        )}
                                                    >
                                                        <span className="flex space-x-2">
                                                            <PencilIcon className="w-5 h-5" />
                                                            <span>
                                                                Редактировать
                                                            </span>
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
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <h3>Здесь пока нет оборудования</h3>
                    )}
                </div>
            </div>
        </>
    );
}

MachineIndex.layout = (page) => (
    <AdminLayout children={page} header="Оборудование" />
);
