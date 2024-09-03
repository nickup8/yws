import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function SupplierCreate() {
    return (
        <>
            <Head title="Добавить нового поставщика" />
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">
                    <form noValidate>
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
                                />
                            </div>
                        </div>
                        <div className="mt-3">
                            <PrimaryButton>Создать</PrimaryButton>
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
