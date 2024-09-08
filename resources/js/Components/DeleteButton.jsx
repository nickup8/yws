import { TrashIcon } from "@heroicons/react/24/outline";

export default function DeleteButton({
    className = "",
    onClick = () => {},
    children,
    ...props
}) {
    return (
        <button
            onClick={() => onClick()}
            className="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
        >
            <span className="flex space-x-2 text-red-500 hover:text-red-600 transition ">
                <TrashIcon className="w-5 h-5" />
                <span>Удалить</span>
            </span>
        </button>
    );
}
