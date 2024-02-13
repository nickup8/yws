import { Container } from "@/Components/Container";
import { H1 } from "@/Components/Typography/H1";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Supplierpage({ auth, supplier }) {
    return (
        <Authenticated user={auth.user}>
            <Head title={supplier.title} />
            <Container>
                <H1>{supplier.title}</H1>
                <div>
                    <strong>Код поставщика:</strong> {supplier.code}
                </div>
                <div>
                    <strong>ИНН:</strong> {supplier.inn}
                </div>
                <div>
                    <strong>ОГРН:</strong> {supplier.ogrn}
                </div>
                <div>
                    <strong>Юридический адрес:</strong> {supplier.address}
                </div>
                <div>
                    <strong>Фактический адрес:</strong> {supplier.fact_address}
                </div>
                <div>
                    <strong>Контактное лицо:</strong> {supplier.contact_person}
                </div>
                <div>
                    <strong>Телефон:</strong> {supplier.phone}
                </div>
                <div>
                    <strong>Электронная почта:</strong> {supplier.email}
                </div>
                <div>
                    <strong>Комментарий:</strong> {supplier.comment}
                </div>
            </Container>
        </Authenticated>
    );
}
