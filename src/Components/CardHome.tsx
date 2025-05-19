import {Link} from "react-router-dom";

interface CardHomeProps {
    title: string;
    description: string;
    cover: string;
    isAdmin?: boolean;
}

const CardHome = ({ title, description, cover } : CardHomeProps) => {
    return (
            <Link to={"/quiz"}>
                <div className="h-full bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 border border-gray-100">
                    <div className="p-6 flex flex-col items-center">
                        <div className="mb-4 p-4 bg-yellow-50 rounded-full">
                            <img className="w-20 h-20 object-contain" src={cover} alt="JavaScript" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                        <p className="text-gray-600 text-center">{description}</p>
                    </div>
                </div>
            </Link>
    )
}

export default CardHome;