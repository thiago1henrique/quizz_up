import { Link } from "react-router-dom";

interface CardHomeProps {
    title: string;
    description: string;
    cover: string;
    route: string;
    isAdmin?: boolean;
    //onEdit?: () => void;
    onDelete?: () => void;
}

const CardHome = ({ title, description, cover, route, isAdmin = false, onDelete }: CardHomeProps) => {
    return (
        <div className="group relative h-full">
            <Link to={route}>
                <div className="h-full bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 border border-gray-100">
                    <div className="p-6 flex flex-col items-center">
                        <div className="mb-4 p-4 bg-yellow-50 rounded-full">
                            <img className="w-20 h-20 object-contain" src={cover} alt={title} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                        <p className="text-gray-600 text-center">{description}</p>
                    </div>
                </div>
            </Link>

            {isAdmin && (
                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link to={"/newQuestion"}>
                        <button
                            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors cursor-pointer"
                            aria-label="Editar quiz"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                        </button>
                    </Link>

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onDelete?.();
                        }}
                        className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors cursor-pointer"
                        aria-label="Excluir quiz"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default CardHome;