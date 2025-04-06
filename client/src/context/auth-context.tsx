import { createContext, ReactNode, useContext, useState } from "react";

interface User {
    isAuth: boolean;
}

interface authProps {
    user: User | null;
    handleUser: () => void
}

interface AuthProviderProps {
    children: ReactNode;
}

const auth = createContext<authProps | null>(null)

export default function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<User>({
        isAuth: true
    });

    const handleUser = () => {
        setUser({
            isAuth: true,
        });
    }

    return (
        <auth.Provider value={{ handleUser, user }}>
            {children}
        </auth.Provider>
    )
}

export const useAuth = () => {
    const ctx = useContext(auth);
    if (!ctx) {
        throw new Error("Can't use the useSidebar context outside the SidebarProvider.")
    }

    return ctx;
}