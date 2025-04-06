import { Link } from "react-router";
import { useAuth } from "../context/auth-context";

interface NavbarProps {
    onOpenChange: () => void;
}

export default function Navbar({ onOpenChange }: NavbarProps) {

    const { user } = useAuth();

    return (
        <nav className="p-1">
            <ul className="flex justify-between items-center">
                <section className="flex items-center gap-2">
                    <button className="text-4xl cursor-pointer" onClick={onOpenChange}>=</button>
                    <li className="font-semibold">
                        <Link to={`/`}>SAROS</Link>
                    </li>
                </section>
                <section>
                    {user?.isAuth ? (<li>
                        <Link to={`/user/sign`} className="text-md">Sign</Link>
                    </li>) : null}
                </section>
            </ul>
        </nav>
    )
}