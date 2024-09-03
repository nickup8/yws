import { Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export default function Collaps({ children, icon, title, open, setOpen }) {
    return (
        <>
            <div
                onClick={() => setOpen(!open)}
                className="cursor-pointer w-full justify-between items-center flex py-2 px-3 rounded hover:bg-gray-100 transition duration-200"
            >
                <div className="flex items-center">
                    <span className="w-6 h-6 mr-2">{icon}</span>
                    <span className="font-semibold">{title}</span>
                </div>
                {open ? (
                    <ChevronUpIcon className="w-4 h-4" />
                ) : (
                    <ChevronDownIcon className="w-4 h-4" />
                )}
            </div>
            <Transition show={open}>
                <div className="ml-6 border-collapse border-l border-gray-300">
                    {children.length ? (
                        children.map((child, index) => (
                            <div key={index} className="flex items-center">
                                <div className="border-b border-gray-300 w-4"></div>
                                {child}
                            </div>
                        ))
                    ) : (
                        <div className="flex items-center">
                            <div className="border-b border-gray-300 w-4"></div>
                            {children}
                        </div>
                    )}
                </div>
            </Transition>
        </>
    );
}
