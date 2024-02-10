import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Container } from "@/Components/Container";
import { H1 } from "@/Components/Typography/H1";
import { Paper } from "@/Components/Paper";

export default function Suppliers({ suppliers, auth }) {
    return (
        <Authenticated user={auth.user}>
            <Head title="Поставщики" />
            <Container>
                <div className="flex justify-between">
                    <H1>Поставщики</H1>
                    <Link href={route("suppliers.new")}>
                        Добавить поставщика
                    </Link>
                </div>
                <Paper>
                    {suppliers.length ? (
                        <table className="w-full mt-3 border-collapse border border-slate-400">
                            <thead>
                                <tr>
                                    <th className="border border-slate-300">
                                        Код поставщика
                                    </th>
                                    <th className="border border-slate-300">
                                        Название организации
                                    </th>
                                    <th className="border border-slate-300">
                                        Дата добавления
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
                                                {Date(
                                                    supplier.created_at
                                                ).toLocaleString({
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </td>
                                            <td className="border border-slate-300 text-center"></td>
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
