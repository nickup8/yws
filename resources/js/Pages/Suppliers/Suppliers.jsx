import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Container } from "@/Components/Container";
import { H1 } from "@/Components/Typography/H1";
import { Paper } from "@/Components/Paper";
import { MdOutlineVisibility } from "react-icons/md";
import { IconLink } from "@/Components/UI/IconButtons/IconLink";
import { MdOutlineCreate } from "react-icons/md";

export default function Suppliers({ suppliers, auth }) {
    return (
        <Authenticated user={auth.user}>
            <Head title="Поставщики" />
            <Container>
                <div className="flex justify-between">
                    <H1>Поставщики</H1>
                    <Link
                        className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                        href={route("suppliers.new")}
                    >
                        Добавить поставщика
                    </Link>
                </div>
                <Paper>
                    {suppliers.length ? (
                        <table className="w-full border-collapse border border-slate-400">
                            <thead>
                                <tr>
                                    <th className="border border-slate-300">
                                        Код поставщика
                                    </th>
                                    <th className="border border-slate-300">
                                        Название организации
                                    </th>
                                    <th className="border border-slate-300">
                                        Дата обновления
                                    </th>
                                    <th className="border border-slate-300">
                                        Действия
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {suppliers.map((supplier, index) => {
                                    return (
                                        <tr
                                            key={`${supplier.id}_${supplier.code}_${index}`}
                                        >
                                            <td className="border border-slate-300 text-center">
                                                {supplier.code}
                                            </td>
                                            <td className="border border-slate-300 text-center">
                                                {supplier.title}
                                            </td>
                                            <td className="border border-slate-300 text-center">
                                                {new Date(
                                                    supplier.updated_at
                                                ).toLocaleString("ru-RU", {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                    hour: "numeric",
                                                    minute: "numeric",
                                                })}
                                            </td>
                                            <td className="border border-slate-300 text-center">
                                                <IconLink
                                                    icon={
                                                        <MdOutlineVisibility
                                                            size={24}
                                                        />
                                                    }
                                                    href={route(
                                                        "suppliers.show",
                                                        supplier.id
                                                    )}
                                                />
                                                <IconLink
                                                    icon={
                                                        <MdOutlineCreate
                                                            size={24}
                                                        />
                                                    }
                                                    href={route(
                                                        "suppliers.edit",
                                                        supplier.id
                                                    )}
                                                />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    ) : (
                        <p>Нет зарегестрированных поставщиков</p>
                    )}
                </Paper>
            </Container>
        </Authenticated>
    );
}
