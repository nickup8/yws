import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function MachineSettings() {
    const { data, setData, post, processing, errors, reset } = useForm([
        {
            storage_bin: "",
        },
    ]);

    const inputAdd = () => {
        setData([...data, { storage_bin: "" }]);
    };

    const inputRemove = (index) => {
        const list = [...data];
        list.splice(index, 1);
        setData(list);
    };

    const handleInputChange = (index, value) => {
        const list = [...data];
        list[index].storage_bin = value;
        setData(list);
    }; //handleInputChange

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <>
            <Head title="Настройки оборудования" />
            <div className="bg-white shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">
                    <h1 className="text-lg font-semibold">Рабочие ячейки</h1>
                    <form className="mt-3" noValidate onSubmit={submit}>
                        <div className="">
                            {data.map((storageBin, index) => (
                                <div
                                    key={index}
                                    className="flex space-x-2 items-end mb-4"
                                >
                                    <div className="w-full">
                                        <InputLabel
                                            htmlFor={`storage_bin-${index}`}
                                            value={`Ячейка ${index + 1}`}
                                            className="mb-2"
                                        />
                                        <TextInput
                                            id={`storage_bin-${index}`}
                                            className="w-full"
                                            name="storage_bin"
                                            value={storageBin.storage_bin}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    index,
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    {data.length > 1 && (
                                        <div>
                                            <SecondaryButton
                                                onClick={() =>
                                                    inputRemove(index)
                                                }
                                            >
                                                <TrashIcon className="w-4 h-4" />
                                            </SecondaryButton>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <PrimaryButton>Сохранить</PrimaryButton>
                            <SecondaryButton onClick={inputAdd}>
                                Добавить ячейку
                            </SecondaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
MachineSettings.layout = (page) => (
    <AdminLayout children={page} header={`Настройки оборудования `} />
);
