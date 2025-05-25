import '../App.css';
import Header from "../Components/Header.tsx";
import CardHome from "../Components/CardHome.tsx";
// 1. Importe o array do seu arquivo de dados
import { programmingLanguages } from '../data/quizzes.ts'; // <<< Atualize o caminho se necessário

function Menu() {
    return (
        <div className="min-h-screen ">
            <Header/>
            <section className="py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">Escolha seu Quiz</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* 2. Use o map para renderizar os cards dinamicamente */}
                        {programmingLanguages.map((language) => (
                            <CardHome
                                key={language.title} // 3. Use uma chave única (title é uma opção)
                                route={"/quiz"} // Defina a rota como desejar
                                title={language.title} // Passe o título
                                cover={language.image} // Passe a URL da imagem (cover)
                                description={language.description} // Passe a descrição
                                // isAdmin={false} // Adicione se necessário, talvez com base em alguma lógica
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Menu;