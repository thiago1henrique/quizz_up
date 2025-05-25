// src/pages/Profile.tsx (ou onde estiver seu componente)

import Header from "../Components/Header.tsx";
import { Link } from "react-router-dom";
// Importe os dados do usuário do novo arquivo
import { sampleUser } from '../data/usuarios.ts';

const Profile = () => {
    const userData = sampleUser;

    if (!userData) {
        return <div>Carregando perfil...</div>;
    }

    const { name: studentName, quizHistory } = userData;
    const totalScore = quizHistory.reduce((acc, quiz) => acc + quiz.score, 0);
    const totalQuestions = quizHistory.reduce((acc, quiz) => acc + quiz.total, 0);
    const successRate = totalQuestions > 0 ? Math.round((totalScore / totalQuestions) * 100) : 0;

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Header />

            <div className="max-w-4xl mx-auto px-4 py-32">
                {/* O restante do seu JSX permanece quase idêntico */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Olá, {studentName}!</h1>
                    <p className="text-lg text-gray-600">Acompanhe seu progresso e histórico de quizzes</p>

                    <div className="flex justify-center gap-6 mt-6">
                        <div className="bg-white p-4 rounded-xl shadow-sm w-32 text-center">
                            <div className="text-3xl font-bold text-yellow-500">{quizHistory.length}</div>
                            <div className="text-gray-500">Quizzes</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm w-32 text-center">
                            <div className="text-3xl font-bold text-green-500">
                                {successRate}%
                            </div>
                            <div className="text-gray-500">Taxa de acerto</div>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                        <svg className="w-6 h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        Seu histórico
                    </h2>

                    <div className="space-y-4">
                        {quizHistory.length === 0 ? (
                            <p className="text-center text-gray-500 bg-white p-6 rounded-xl shadow-sm">
                                Você ainda não completou nenhum quiz.
                            </p>
                        ) : (
                            quizHistory.map((quiz) => {
                                const percentage = quiz.total > 0 ? Math.round((quiz.score / quiz.total) * 100) : 0;
                                return (
                                    <div key={quiz.id} className="flex items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <div className="flex-shrink-0 mr-4">
                                            <img src={quiz.logo} alt={`Logo ${quiz.title}`} className="w-16 h-16 object-contain rounded-lg" />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-xl font-semibold text-gray-800">{quiz.title}</h3>
                                            <div className="mt-1">
                                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                    <div
                                                        className="bg-yellow-500 h-2.5 rounded-full"
                                                        style={{ width: `${percentage}%` }}
                                                    ></div>
                                                </div>
                                                <div className="flex justify-between text-sm text-gray-500 mt-1">
                                                    <span>{quiz.score} de {quiz.total} corretas</span>
                                                    <span>{percentage}%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            {quiz.score === quiz.total ? (
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                                    Perfeito!
                                                </span>
                                            ) : quiz.score >= quiz.total * 0.7 ? (
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                                    Bom trabalho
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                                                    Continue praticando
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>

                <div className="text-center mt-8">
                    <Link to={"/home"}>
                        <button className="cursor-pointer inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-medium rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Fazer novo quiz
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;