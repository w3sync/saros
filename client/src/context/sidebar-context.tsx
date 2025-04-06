import { createContext, ReactNode, useContext, useState } from "react";

interface SidebarProviderProps {
    children: ReactNode
}

interface SidebarProps {
    open: boolean;
    data: number[];
    handleDataGeneration: (val: number) => void;
    handleOnOpenChange: () => void;
}

const sidebar = createContext<SidebarProps | null>(null)

export default function SidebarProvider({ children }: SidebarProviderProps) {

    const [open, setOpen] = useState(false);
    const [data, setData] = useState<number[]>(() => Array.from({ length: 4 }, (_, i) => i))

    const handleOnOpenChange = () => {
        setOpen(p => !p);
    }

    const handleDataGeneration = (n: number = 5) => {
        const data = Array.from({ length: n }, (_, i) => i);
        setData(data);
    }

    return (
        <sidebar.Provider value={{ open, handleOnOpenChange, data, handleDataGeneration }}>
            {children}
        </sidebar.Provider>
    )
}

export const useSidebar = () => {
    const ctx = useContext(sidebar);
    if (!ctx) {
        throw new Error("Can't use the useSidebar context outside the SidebarProvider.")
    }

    return ctx;
}