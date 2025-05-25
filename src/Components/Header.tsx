import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'; // Adicione estes imports

const Header = () => {
    // Estado para armazenar os dados do usuário
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);

    // Recupera os dados do localStorage ao carregar o componente
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const userName = user?.name || 'Usuário'; // Valor padrão caso não esteja logado
    const userInitial = userName.charAt(0).toUpperCase();

    return (
        <header className={"flex justify-between items-center w-full h-20 bg-[#16161d] px-4 sm:px-20 fixed z-40"}>
            <div>
                <Link to={"/home"}><img src="/logo.svg" alt="logo" className={"h-10 pointer-events-none"} /></Link>
            </div>

            <div className={"flex items-center gap-6"}>
                {user ? (
                    <>
                        <Link to={"/profile"} className="flex items-center gap-3 group">
                            <div className="w-9 h-9 bg-purple-500 rounded-full flex justify-center items-center text-white font-bold text-lg group-hover:bg-purple-600 transition-colors">
                                {userInitial}
                            </div>
                            <h2 className={"text-white font-medium group-hover:text-purple-300 transition-colors"}>
                                {userName}
                            </h2>
                        </Link>

                        <button
                            onClick={() => {
                                localStorage.removeItem('user');
                                window.location.href = '/login';
                            }}
                            className={"text-white font-bold hover:text-red-500 transition-colors"}
                        >
                            LogOut
                        </button>
                    </>
                ) : (
                    <Link to={"/"} className={"text-white font-bold hover:text-green-500 transition-colors"}>
                        Login
                    </Link>
                )}
            </div>
        </header>
    )
}

export default Header;