import '../App.css';
import Header from "../Components/Header.tsx";
import CardHome from "../Components/CardHome.tsx";

function Menu() {
    return (
        <div className="min-h-screen ">
            <Header/>
            <section className="py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">Escolha seu Quiz</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <CardHome title={"Javascript"} cover={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                        <CardHome title={"Java"} cover={"https://seeklogo.com/images/J/java-logo-7833D1D21A-seeklogo.com.png"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                        <CardHome title={"Python"} cover={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                        <CardHome title={"Banco de dados"} cover={"https://w7.pngwing.com/pngs/589/216/png-transparent-database-computer-icons-others-miscellaneous-company-text.png"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                        <CardHome title={"HTML"} cover={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                        <CardHome title={"CSS"} cover={"https://images.seeklogo.com/logo-png/18/1/css3-logo-png_seeklogo-186678.png"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />

                    </div>
                </div>
            </section>
        </div>
    )
}
export default Menu;