import AdminLayout from "@/Layouts/AdminLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <div className="p-6 text-gray-900 bg-white rounded-lg">
                You're logged in!
            </div>
        </>
    );
}

Dashboard.layout = (page) => (
    <AdminLayout children={page} header="Панель мониторинга" />
);
