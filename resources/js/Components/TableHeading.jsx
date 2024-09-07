import {
    ArrowLongDownIcon,
    ArrowLongUpIcon,
} from "@heroicons/react/24/outline";

export default function TableHeading({
    name,
    sortable = false,
    sort_field = null,
    sort_direction = null,
    sortChanged = () => {},
    queryParams = {},
    children,
    ...props
}) {
    return (
        <th
            onClick={() => {
                if (sortable) {
                    sortChanged(name);
                }
            }}
            className={
                "border border-r-0 border-slate-400 p-2 " +
                (sortable
                    ? "cursor-pointer hover:bg-slate-300 transition duration-300"
                    : "")
            }
        >
            <div className="flex items-center justify-center">
                {children}
                {sortable && (
                    <span className="ml-2 w-4 h-4">
                        {queryParams.sort_field === name &&
                            (queryParams.sort_direction === "asc" ? (
                                <ArrowLongDownIcon className="w-4 h-4" />
                            ) : (
                                <ArrowLongUpIcon className="w-4 h-4" />
                            ))}
                    </span>
                )}
            </div>
        </th>
    );
}
