import Inputs from "../Components/Inputs.tsx";
import Button from "../Components/Button.tsx";

const NewQuestion = () => {
    return (
        <section>
            <div className={"w-full h-dvh flex flex-col items-center justify-center"}>
                <div>
                    <h1>Nome do Quizz: {"Python"}</h1>
                    <Inputs label={'Nome do Quizz'} type={'text'} placeholder={"Nome do Quizz"} value={"Python"} onChange={() => alert("zap")}/>
                </div>

                <div className={"py-6"}>
                    <h2>Questão {1}</h2>
                    <Inputs label={'Insira sua pergunta'} type={'text'} placeholder={"Insira sua pergunta"} value={"Quando foi criado o JavaScript" + "?"} onChange={() => alert("zap")}/>

                    <div>
                        <Inputs label={'Altertiva 1'} type={'text'} placeholder={"Insira sua pergunta"} value={"1995"} onChange={() => alert("questao 1")}/>
                        <Inputs label={'Altertiva 2'} type={'text'} placeholder={"Insira sua pergunta"} value={"2004"} onChange={() => alert("questao 2")}/>
                        <Inputs label={'Altertiva 3'} type={'text'} placeholder={"Insira sua pergunta"} value={"1993"} onChange={() => alert("questao 3")}/>
                        <Inputs label={'Altertiva 4'} type={'text'} placeholder={"Insira sua pergunta"} value={"2010"} onChange={() => alert("questao 4")}/>
                    </div>

                    <div className={"flex gap-4"}>
                        <Button title={"Voltar"}/>
                        <Button title={"Proxima"}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewQuestion;