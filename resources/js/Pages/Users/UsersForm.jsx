import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function UsersForm({ roles }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        login: "",
        first_name: "",
        last_name: "",
        password: "",
        password_confirmation: "",
        roles: "",
    });

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
    };
    return (
        <>
            <Head title="Создать пользователя" />
            <div className="bg-white shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">
                    <form noValidate onSubmit={submit}>
                        <div className="flex space-x-4">
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="login"
                                    value="Табельный номер (Логин)"
                                    className="mb-2"
                                />
                                <TextInput
                                    id="login"
                                    className="w-full"
                                    required
                                    name="login"
                                    value={data.login}
                                    onChange={(e) =>
                                        setData("login", e.target.value)
                                    }
                                />
                            </div>
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="last_name"
                                    value="Фамилия"
                                    className="mb-2"
                                />
                                <TextInput
                                    id="last_name"
                                    className="w-full"
                                    required
                                    name="last_name"
                                    value={data.last_name}
                                    onChange={(e) =>
                                        setData("last_name", e.target.value)
                                    }
                                />
                            </div>
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="first_name"
                                    value="Имя"
                                    className="mb-2"
                                />
                                <TextInput
                                    id="first_name"
                                    className="w-full"
                                    required
                                    name="first_name"
                                    value={data.first_name}
                                    onChange={(e) =>
                                        setData("first_name", e.target.value)
                                    }
                                />
                            </div>
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="password"
                                    value="Пароль"
                                    className="mb-2"
                                />
                                <TextInput
                                    id="password"
                                    className="w-full"
                                    required
                                    name="password"
                                    type="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                            </div>
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="confirm_password"
                                    value="Подтвердите пароль"
                                    className="mb-2"
                                />
                                <TextInput
                                    id="confirm_password"
                                    className="w-full"
                                    required
                                    name="password_confirmation"
                                    type="password"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                            <div className="w-full">
                                <InputLabel
                                    htmlFor="role"
                                    value="Роль"
                                    className="mb-2"
                                />
                                <select
                                    id="role"
                                    className="block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                    name="roles"
                                    value={data.roles}
                                    onChange={(e) =>
                                        setData("roles", e.target.value)
                                    }
                                >
                                    <option value="" disabled>
                                        Выберите роль
                                    </option>
                                    {roles.map((role) => (
                                        <option key={role.id} value={role.id}>
                                            {role.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="mt-5 flex space-x-4">
                            <PrimaryButton type="submit">Создать</PrimaryButton>
                            <Link href={route("users.index")}>
                                <SecondaryButton>Отмена</SecondaryButton>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

UsersForm.layout = (page) => (
    <AdminLayout children={page} header="Создать пользователя" />
);
