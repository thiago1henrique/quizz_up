import { useState } from 'react';
import Inputs from "../Components/Inputs.tsx";
import Button from "../Components/Button.tsx";
import Header from "../Components/Header.tsx";

interface Question {
    question: string;
    options: string[];
    correctAnswer: number;
}

const NewQuestion = () => {
    const [quizName, setQuizName] = useState("JavaScript");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState<Question[]>(
        Array(5).fill({ question: "", options: ["", "", "", ""], correctAnswer: 0 })
    );

    // Dados da questão atual
    const currentQuestion = questions[currentQuestionIndex];

    const handleQuizNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuizName(e.target.value);
    };

    const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedQuestions = [...questions];
        updatedQuestions[currentQuestionIndex] = {
            ...updatedQuestions[currentQuestionIndex],
            question: e.target.value
        };
        setQuestions(updatedQuestions);
    };

    const handleOptionChange = (index: number, value: string) => {
        const updatedQuestions = [...questions];
        updatedQuestions[currentQuestionIndex] = {
            ...updatedQuestions[currentQuestionIndex],
            options: [
                ...updatedQuestions[currentQuestionIndex].options.slice(0, index),
                value,
                ...updatedQuestions[currentQuestionIndex].options.slice(index + 1)
            ]
        };
        setQuestions(updatedQuestions);
    };

    const handleCorrectAnswerChange = (index: number, isChecked: boolean) => {
        if (isChecked) {
            const updatedQuestions = [...questions];
            updatedQuestions[currentQuestionIndex] = {
                ...updatedQuestions[currentQuestionIndex],
                correctAnswer: index
            };
            setQuestions(updatedQuestions);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            console.log("Quiz completo:", { quizName, questions });
            alert("Quiz completo! Verifique o console para ver os dados.");
        }
    };

    const handlePreviousQuestion = () => {
        setCurrentQuestionIndex(prev => Math.max(prev - 1, 0));
    };

    return (
        <section>
            <Header/>
            <div className={"w-full h-dvh flex flex-col items-center justify-center"}>
                <div>
                    <h1 className={"text-4xl font-bold"}>Nome do Quiz: {quizName}</h1>
                    <Inputs
                        label={'Nome do Quiz'}
                        type={'text'}
                        placeholder={"Nome do Quiz"}
                        value={quizName}
                        onChange={handleQuizNameChange}
                    />
                </div>

                <div className={"py-6"}>
                    <h2 className="text-2xl font-semibold">Questão {currentQuestionIndex + 1}/{questions.length}</h2>
                    <Inputs
                        label={'Insira sua pergunta'}
                        type={'text'}
                        placeholder={"Insira sua pergunta"}
                        value={currentQuestion.question}
                        onChange={handleQuestionChange}
                    />

                    <div>
                        {currentQuestion.options.map((option, index) => (
                            <Inputs
                                key={index}
                                label={`Alternativa ${index + 1}`}
                                type={'text'}
                                placeholder={`Alternativa ${index + 1}`}
                                value={option}
                                onChange={(e) => handleOptionChange(index, e.target.value)}
                                showCheckbox={true}
                                isCorrect={currentQuestion.correctAnswer === index}
                                onCheckboxChange={(checked) => handleCorrectAnswerChange(index, checked)}
                            />
                        ))}
                    </div>

                    <div className={"flex flex-col items-center gap-4 pt-4"}>
                        <Button
                            title={"Voltar"}
                            onClick={handlePreviousQuestion}
                            disabled={currentQuestionIndex === 0}
                        />
                        <Button
                            title={
                                currentQuestionIndex < questions.length - 1
                                    ? `Próxima Questão ${currentQuestionIndex + 1}/${questions.length}`
                                    : "Finalizar Quiz"
                            }
                            onClick={handleNextQuestion}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewQuestion;