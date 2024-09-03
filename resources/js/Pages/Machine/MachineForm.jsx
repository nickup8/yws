import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";

import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

const area = [
    {
        id: 1,
        number: 1,
        title: "Зона 1",
    },
    {
        id: 2,
        number: 2,
        title: "Зона 2",
    },
    {
        id: 3,
        number: 3,
        title: "Зона 3",
    },
];
export default function MachineForm() {
    const [selectedArea, setSelectedArea] = useState(area[0]);
    const { data, setData, post, processing, errors, reset } = useForm();
    const submitMachines = (e) => {
        e.preventDefault();
        console.log(data);
    };
    return (
        <>
            <Head title="Добавить оборудование" />
            <div className="bg-white shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">
                    <form noValidate onSubmit={submitMachines}>
                        <div className="flex space-x-4">
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="name"
                                    value="Название оборудования"
                                    className="mb-2"
                                />
                                <TextInput
                                    id="name"
                                    type="text"
                                    className="block w-full"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="project"
                                    value="Проект"
                                    className="mb-2"
                                />
                                <TextInput
                                    id="project"
                                    type="text"
                                    className="block w-full"
                                    name="project"
                                    value={data.project}
                                    onChange={(e) =>
                                        setData("project", e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="area"
                                    value="Проект"
                                    className="mb-2"
                                />
                                <select
                                    name="area"
                                    value={data.area}
                                    onChange={(e) =>
                                        setData("area", e.target.value)
                                    }
                                    className="block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                >
                                    <option value="" disabled>
                                        Выберите зону
                                    </option>
                                    {area.map((area) => (
                                        <option key={area.id} value={area.id}>
                                            {area.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="mt-4">
                            <PrimaryButton type="submit">
                                Добавить
                            </PrimaryButton>
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

MachineForm.layout = (page) => (
    <AdminLayout children={page} header="Добавить оборудование" />
);
