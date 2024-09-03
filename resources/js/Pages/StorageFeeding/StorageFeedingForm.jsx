import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function StorageFeedingForm() {
    return (
        <>
            <Head title="Добавить МХ Фидинг" />
            <div className="bg-white shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">
                    <form noValidate>
                        <div className="w-full flex space-x-4">
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="rack"
                                    value="Название стороны"
                                    className="mb-2"
                                />
                                <TextInput id="rack" className="w-full" />
                            </div>
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="lavels"
                                    value="Количество уровней"
                                    className="mb-2"
                                />
                                <TextInput
                                    id="lavels"
                                    className="w-full"
                                    type="number"
                                />
                            </div>
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="start_lavels"
                                    value="Старотовый уровень"
                                    className="mb-2"
                                />
                                <TextInput
                                    id="start_lavels"
                                    className="w-full"
                                    type="number"
                                />
                            </div>
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="start_storage"
                                    value="Номер начальной ячейки"
                                    className="mb-2"
                                />
                                <TextInput
                                    id="start_storage"
                                    className="w-full"
                                    type="number"
                                />
                            </div>
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="start_storage"
                                    value="Номер конечной ячейки"
                                    className="mb-2"
                                />
                                <TextInput
                                    id="start_storage"
                                    className="w-full"
                                    type="number"
                                />
                            </div>
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="area"
                                    value="Зона"
                                    className="mb-2"
                                />
                                <TextInput
                                    id="area"
                                    className="w-full"
                                    type="number"
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex space-x-3">
                            <PrimaryButton type="submit">Создать</PrimaryButton>
                            <SecondaryButton>Отмена</SecondaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

StorageFeedingForm.layout = (page) => (
    <AdminLayout children={page} header="Добавить МХ Фидинг" />
);
