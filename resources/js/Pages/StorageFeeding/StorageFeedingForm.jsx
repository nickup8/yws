import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";

export default function StorageFeedingForm({ storageFeeding }) {
    const { data, setData, post, put, processing, errors } = useForm({
        rack: storageFeeding ? storageFeeding.data.rack : "",
        count_lavel: storageFeeding ? storageFeeding.data.count_lavel : "",
        start_lavel: storageFeeding ? storageFeeding.data.start_lavel : "",
        start_slot: storageFeeding ? storageFeeding.data.start_slot : "",
        end_slot: storageFeeding ? storageFeeding.data.end_slot : "",
        area: storageFeeding ? storageFeeding.data.area : "",
    });

    const submitStorageFeeding = (e) => {
        e.preventDefault();
        if (storageFeeding) {
            put(route("storages_feeding.update", storageFeeding.data.id));
        } else {
            post(route("storages_feeding.store"));
        }
    };

    console.log(errors);

    return (
        <>
            <Head title="Добавить МХ Фидинг" />
            <div className="bg-white shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">
                    <form noValidate onSubmit={submitStorageFeeding}>
                        <div className="w-full flex space-x-4">
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="rack"
                                    value="Название стороны"
                                    className="mb-2"
                                />
                                <TextInput
                                    id="rack"
                                    className="w-full"
                                    name="rack"
                                    required
                                    value={data.rack}
                                    onChange={(e) =>
                                        setData("rack", e.target.value)
                                    }
                                />
                            </div>
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="count_lavel"
                                    value="Количество уровней"
                                    className="mb-2"
                                />
                                <TextInput
                                    id="count_lavel"
                                    className="w-full"
                                    type="number"
                                    name="count_lavel"
                                    required
                                    value={data.count_lavel}
                                    onChange={(e) =>
                                        setData("count_lavel", e.target.value)
                                    }
                                />
                            </div>
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="start_lavel"
                                    value="Старотовый уровень"
                                    className="mb-2"
                                />
                                <TextInput
                                    id="start_lavel"
                                    className="w-full"
                                    type="number"
                                    name="start_lavel"
                                    required
                                    value={data.start_lavel}
                                    onChange={(e) =>
                                        setData("start_lavel", e.target.value)
                                    }
                                />
                            </div>
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="start_slot"
                                    value="Номер начальной ячейки"
                                    className="mb-2"
                                />
                                <TextInput
                                    id="start_slot"
                                    className="w-full"
                                    type="number"
                                    name="start_slot"
                                    required
                                    value={data.start_slot}
                                    onChange={(e) =>
                                        setData("start_slot", e.target.value)
                                    }
                                />
                            </div>
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="end_slot"
                                    value="Номер конечной ячейки"
                                    className="mb-2"
                                />
                                <TextInput
                                    id="end_slot"
                                    className="w-full"
                                    type="number"
                                    name="end_slot"
                                    required
                                    value={data.end_slot}
                                    onChange={(e) =>
                                        setData("end_slot", e.target.value)
                                    }
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
                                    name="area"
                                    required
                                    value={data.area}
                                    onChange={(e) =>
                                        setData("area", e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex space-x-3">
                            <PrimaryButton type="submit">
                                {storageFeeding ? "Обновить" : "Создать"}
                            </PrimaryButton>
                            <Link href={route("storages_feeding.index")}>
                                <SecondaryButton>Отмена</SecondaryButton>
                            </Link>
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
