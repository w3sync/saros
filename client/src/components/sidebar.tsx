import { useLocation } from "react-router";
import { useSidebar } from "../context/sidebar-context";

interface SidebarProps {
    open: boolean;
}

export default function Sidebar({
    open = true,
}: SidebarProps) {

    const router = useLocation();
    const { data } = useSidebar()

    if (!(/^\/admin\//.test(router.pathname))) {
        return;
    }

    return (
        <>
            {
                open ? (
                    <>
                        <aside className="w-[15rem]" >
                            <ul className="flex flex-col gap-2 p-2">
                                {
                                    data.length > 0 ? (
                                        <>
                                            {
                                                data?.map((_, idx) => (
                                                    <li key={idx} className="bg-gray-100 p-2 rounded-sm flex justify-start items-center gap-2">
                                                        <span className={`block w-2 h-2 rounded-full ${idx % 2 == 0 ? `bg-red-600` : idx % 3 == 1 ? "bg-yellow-600" : `bg-green-600`}`}></span> Ambulance {idx + 1}
                                                    </li>
                                                ))
                                            }
                                        </>
                                    ) : (
                                        <>
                                            <li className="bg-gray-100 p-2 rounded-sm flex justify-start items-center gap-2">
                                                <span className="block w-2 h-2 rounded-full bg-red-600"></span> Ambulance 1
                                            </li>
                                            <li className="bg-gray-100 p-2 rounded-sm flex justify-start items-center gap-2">
                                                <span className="block w-2 h-2 rounded-full bg-yellow-400"></span> Ambulance 2
                                            </li>
                                            <li className="bg-gray-100 p-2 rounded-sm flex justify-start items-center gap-2">
                                                <span className="block w-2 h-2 rounded-full bg-green-400"></span>  Ambulance 3
                                            </li>
                                        </>
                                    )
                                }

                            </ul >
                        </aside >
                    </>
                ) : null
            }
        </>
    )
}