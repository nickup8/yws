import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";

import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function MachineForm({ areas, machines }) {
    const { data, setData, post, put, processing, errors, reset, selected } =
        useForm({
            name: machines ? machines.data.name : "",
            project: machines ? machines.data.project : "",
            area: machines ? machines.data.area : "",
        });

    const submitMachines = (e) => {
        e.preventDefault();
        machines
            ? put(route("machines.update", machines.data.id))
            : post(route("machines.store"));
    };

    return (
        <>
            <Head
                title={
                    machines ? "Изменить оборудование" : "Добавить оборудование"
                }
            />
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
                                    error={errors.name}
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
                                    error={errors.project}
                                    value={data.project}
                                    onChange={(e) =>
                                        setData("project", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.project}
                                    className="mt-2"
                                />
                            </div>
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="area"
                                    value="Зона"
                                    className="mb-2"
                                />

                                <SelectInput
                                    options={
                                        ({ value: "", label: "Выберите зону" },
                                        areas.map((area) => {
                                            return {
                                                value: area,
                                                label: `Зона ${area}`,
                                            };
                                        }))
                                    }
                                    optionDefault={{
                                        value: "",
                                        label: "Выберите зону",
                                    }}
                                    name={"area"}
                                    value={data.area}
                                    error={errors.area}
                                    onChange={(e) =>
                                        setData("area", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.area}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex space-x-3">
                            <PrimaryButton type="submit">
                                {machines ? "Сохранить" : "Добавить"}
                            </PrimaryButton>
                            <Link href={route("machines.index")}>
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

MachineForm.layout = (page) => {
    return (
        <AdminLayout
            children={page}
            header={
                page.props.machines
                    ? "Изменить оборудование"
                    : "Добавить оборудование"
            }
        />
    );
};
