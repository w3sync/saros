import { Outlet } from "react-router";
import { useSidebar } from "../context/sidebar-context";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function GlobalLayout() {
    const { open, handleOnOpenChange } = useSidebar();

    return (
        <>
            <Navbar
                onOpenChange={handleOnOpenChange}
            />

            <div className="flex">
                <Sidebar
                    open={open}
                />
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
        </>
    )
}