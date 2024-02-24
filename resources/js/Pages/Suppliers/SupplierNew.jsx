import { Container } from "@/Components/Container";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { Paper } from "@/Components/Paper";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { H1 } from "@/Components/Typography/H1";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

function SupplierNew({ supplier }) {
    const { data, setData, post, patch, processing, errors } = useForm({
        code: supplier && supplier.code ? supplier.code : "",
        inn: supplier && supplier.inn ? supplier.inn : "",
        title: supplier && supplier.title ? supplier.title : "",
        address: supplier && supplier.address ? supplier.address : "",
        phone: supplier && supplier.phone ? supplier.phone : "",
        email: supplier && supplier.email ? supplier.email : "",
        comment: supplier && supplier.comment ? supplier.comment : "",
        fact_address:
            supplier && supplier.fact_address ? supplier.fact_address : "",
        contact_person:
            supplier && supplier.contact_person ? supplier.contact_person : "",
        ogrn: supplier && supplier.ogrn ? supplier.ogrn : "",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        post(route("suppliers.store"));
    };

    const onUpdate = (e) => {
        e.preventDefault();
        patch(route("suppliers.update", supplier.id));
    };
    return (
        <>
            <Head title={supplier ? supplier.title : "Новый поставщик"} />
            <Container>
                <H1>{supplier ? supplier.title : "Новый поставщик"}</H1>
                <Paper className="w-2/4">
                    <form noValidate onSubmit={supplier ? onUpdate : onSubmit}>
                        <div className="flex justify-between gap-3">
                            <div className="w-full">
                                <InputLabel required hfor="code">
                                    Код поставщика
                                </InputLabel>
                                <TextInput
                                    id="code"
                                    name="code"
                                    className="mt-1 block w-full"
                                    type="text"
                                    required
                                    onChange={(e) =>
                                        setData("code", e.target.value)
                                    }
                                    value={data.code}
                                />
                                <InputError
                                    message={errors.code}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div className="w-full mt-4">
                            <InputLabel required hfor="title">
                                Название
                            </InputLabel>
                            <TextInput
                                id="title"
                                name="title"
                                className="mt-1 block w-full"
                                required
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                value={data.title}
                            />
                            <InputError
                                message={errors.title}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex justify-between gap-3 mt-4">
                            <div className="w-full">
                                <InputLabel hfor="inn">ИНН</InputLabel>
                                <TextInput
                                    id="inn"
                                    name="inn"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("inn", e.target.value)
                                    }
                                    value={data.inn}
                                />
                                <InputError
                                    message={errors.inn}
                                    className="mt-2"
                                />
                            </div>
                            <div className="w-full">
                                <InputLabel hfor="inn">ОГРН</InputLabel>
                                <TextInput
                                    id="ogrn"
                                    name="ogrn"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("ogrn", e.target.value)
                                    }
                                    value={data.ogrn}
                                />
                                <InputError
                                    message={errors.ogrn}
                                    className="mt-2"
                                />
                            </div>
                        </div>

                        <div className="w-full mt-4">
                            <InputLabel hfor="address">
                                Юридический адрес
                            </InputLabel>
                            <TextInput
                                id="address"
                                name="address"
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                                value={data.address}
                            />
                            <InputError
                                message={errors.address}
                                className="mt-2"
                            />
                        </div>
                        <div className="w-full mt-4">
                            <InputLabel hfor="fact_address">
                                Фактический адрес
                            </InputLabel>
                            <TextInput
                                id="fact_address"
                                name="fact_address"
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("fact_address", e.target.value)
                                }
                                value={data.fact_address}
                            />
                            <InputError
                                message={errors.fact_address}
                                className="mt-2"
                            />
                        </div>

                        <div className="w-full mt-4">
                            <InputLabel hfor="contact_person">
                                Контактное лицо
                            </InputLabel>
                            <TextInput
                                id="contact_person"
                                name="contact_person"
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("contact_person", e.target.value)
                                }
                                value={data.contact_person}
                            />
                            <InputError
                                message={errors.contact_person}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex justify-between gap-3 mt-4">
                            <div className="w-full">
                                <InputLabel hfor="phone">Телефон</InputLabel>
                                <TextInput
                                    id="phone"
                                    name="phone"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("phone", e.target.value)
                                    }
                                    value={data.phone}
                                />
                                <InputError
                                    message={errors.phone}
                                    className="mt-2"
                                />
                            </div>
                            <div className="w-full">
                                <InputLabel hfor="email">Почта</InputLabel>
                                <TextInput
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    value={data.email}
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <InputLabel hfor="comment">Комментарий</InputLabel>
                            <textarea
                                name="comment"
                                id="comment"
                                cols="30"
                                rows="5"
                                className={
                                    "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                                }
                                onChange={(e) =>
                                    setData("comment", e.target.value)
                                }
                                value={data.comment}
                            ></textarea>
                            <InputError
                                message={errors.comment}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-4 flex items-center">
                            <PrimaryButton
                                type="submit"
                                className="mr-4"
                                disabled={processing}
                            >
                                {supplier ? "Сохранить" : "Создать"}
                            </PrimaryButton>
                            <Link href={route("suppliers.index")}>Отмена</Link>
                        </div>
                    </form>
                </Paper>
            </Container>
        </>
    );
}

SupplierNew.layout = (page) => (
    <Authenticated children={page} user={page.props.auth.user} />
);

export default SupplierNew;
