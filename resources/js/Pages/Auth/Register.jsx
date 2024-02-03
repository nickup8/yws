import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";

export default function Register({ rules }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        login: "",
        name: "",
        lastname: "",
        rule_id: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        // console.log({
        //     login: data.login,
        //     name: data.name,
        //     lastname: data.lastname,
        //     rule_id: data.rule_id,
        // });
        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="login" value="Логин" />

                    <TextInput
                        id="login"
                        name="login"
                        value={data.login}
                        className="mt-1 block w-full"
                        autoComplete="login"
                        isFocused={true}
                        onChange={(e) => setData("login", e.target.value)}
                        required
                    />

                    <InputError message={errors.login} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="name" value="Имя" />

                    <TextInput
                        id="name"
                        name="name"
                        type="text"
                        value={data.name}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="lastname" value="Фамилия" />

                    <TextInput
                        id="lastname"
                        type="text"
                        name="lastname"
                        value={data.lastname}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("lastname", e.target.value)}
                        required
                    />

                    <InputError message={errors.lastname} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="rule_id" value="Роль" />
                    <select
                        name="rule_id"
                        id="rule_id"
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                        value={data.rule_id}
                        onChange={(e) => setData("rule_id", e.target.value)}
                    >
                        <option value="" disabled></option>
                        {rules.map((rule) => (
                            <option value={rule.id} key={rule.id}>
                                {rule.name}
                            </option>
                        ))}
                    </select>
                    <InputError message={errors.rule_id} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Пароль" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Подтверждение пароля"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Добавить
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
