import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function SupplierCreate({ supplier }) {
    const { data, setData, post, put, processing, errors } = useForm({
        supplier_code: supplier ? supplier.data.supplier_code : "",
        supplier_name: supplier ? supplier.data.supplier_name : "",
    });
    console;

    const submit = (e) => {
        e.preventDefault();
        supplier
            ? put(route("suppliers.update", supplier.data.id))
            : post(route("suppliers.store"));
    };
    return (
        <>
            <Head title="Добавить нового поставщика" />
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">
                    <form noValidate onSubmit={submit}>
                        <div className="flex space-x-4">
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="supplier_code"
                                    value="Код поставщика"
                                    className="mb-2"
                                />
                                <TextInput
                                    id="supplier_code"
                                    className="w-full"
                                    name="supplier_code"
                                    value={data.supplier_code}
                                    onChange={(e) =>
                                        setData("supplier_code", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.supplier_code}
                                    className="mt-2"
                                />
                            </div>
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="supplier_name"
                                    value="Название поставщика"
                                    className="mb-2"
                                />
                                <TextInput
                                    id="supplier_name"
                                    className="w-full"
                                    name="supplier_name"
                                    value={data.supplier_name}
                                    onChange={(e) =>
                                        setData("supplier_name", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.supplier_name}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex space-x-2">
                            <PrimaryButton type="submit">
                                {supplier ? "Сохранить" : "Добавить"}
                            </PrimaryButton>
                            <Link href={route("suppliers.index")}>
                                <SecondaryButton>Отмена</SecondaryButton>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-5 text-sm text-gray-400">
                Все поля обязательны для заполнения
            </div>
        </>
    );
}

SupplierCreate.layout = (page) => (
    <AdminLayout children={page} header="Добавить нового поставщика" />
);
