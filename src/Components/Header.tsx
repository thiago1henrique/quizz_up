import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={"flex justify-between items-center w-full h-20 bg-[#16161d] px-4 sm:px-20 fixed z-40]"}>
            <div>
                <Link to={"/home"}><img src="../../public/logo.svg" alt="logo" className={"h-10 pointer-events-none"}/></Link>
            </div>

            <div className={"flex items-center gap-4"}>
                <Link to={"/profile"}>
                    <button className="bg-purple-400 rounded-full p-4 aspect-square flex justify-center items-center cursor-pointer">
                        <img src="../../public/plus.svg" alt="adicionar pergunta" className={"h-4 pointer-events-none"}/>
                    </button>
                </Link>
                <Link to={"/"}><h2 className={"text-white font-bold"}>LogOut</h2></Link>
            </div>
        </header>
    )
}

export default Header;