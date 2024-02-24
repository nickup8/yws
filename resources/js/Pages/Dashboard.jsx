import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";

import { Head } from "@inertiajs/react";

function Dashboard({ auth }) {
    return (
        <>
            <div className="py-12">
                <div className="w-full mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = (page) => (
    <Authenticated
        user={page.props.auth.user}
        children={page}
        title="Панель мониторинга"
    />
);

export default Dashboard;
