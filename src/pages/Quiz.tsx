import { useState, useEffect, useRef } from 'react';
import { questions } from '../data/questions';
import confetti from 'canvas-confetti';
import { Link } from 'react-router-dom';
import Header from "../Components/Header.tsx";

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [showResult, setShowResult] = useState(false);
  const hasFired = useRef(false);

  const question = questions[current];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleNext();
          return 60;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [current]);

  const handleSelect = (key: string) => {
    setSelected(key);
    if (key === question.correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setTimeLeft(60);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setSelected(null);
      setTimeLeft(60);
    }
  };

  useEffect(() => {
    if (showResult && !hasFired.current) {
      hasFired.current = true;
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
      });
    }
  }, [showResult]);

  return (
      <>
        <Header />
        {showResult ? (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-yellow-50 to-white text-center p-8">
              <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-6">🎉 Quiz Finalizado!</h1>

                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 rounded-full bg-yellow-100 opacity-30"></div>
                  </div>
                  <div className="relative text-6xl md:text-8xl font-extrabold text-gray-800">
                    {score}<span className="text-3xl md:text-5xl text-gray-500">/{questions.length}</span>
                  </div>
                </div>

                <p className="text-xl text-gray-600 mb-8">
                  {score > questions.length / 2 ? 'Ótimo trabalho!' : 'Continue praticando!'}
                </p>

                <Link
                    to="/home"
                    className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Voltar para Home
                </Link>
              </div>
            </div>
        ) : (
            <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white flex flex-col items-center p-6 pt-44">
              {/* Header Space */}

              {/* Progress */}
              <div className="w-full max-w-4xl mb-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Question {current + 1} of {questions.length}</h1>

                {/* Progress bar */}
                <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
                  <div
                      className="bg-yellow-400 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>

                {/* Progress indicators */}
                <div className="flex justify-between w-full">
                  {questions.map((_, index) => (
                      <div
                          key={index}
                          className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                              index === current
                                  ? 'bg-yellow-400 text-white border-yellow-500 scale-110'
                                  : index < current
                                      ? 'bg-green-100 text-green-600 border-green-300'
                                      : 'bg-gray-100 text-gray-600 border-gray-300'
                          }`}
                      >
                        {index + 1}
                      </div>
                  ))}
                </div>
              </div>

              {/* Question Card */}
              <div className="w-full max-w-4xl bg-white rounded-xl shadow-md p-8 mb-8 transition-all hover:shadow-lg">
                <div className="text-2xl font-medium text-gray-800 mb-2">Pergunta:</div>
                <div className="text-xl font-semibold text-gray-700">{question.question}</div>
              </div>

              {/* Options Grid */}
              <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {question.options.map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => handleSelect(key)}
                        className={`p-6 rounded-xl text-lg font-medium text-left transition-all transform hover:scale-[1.02] ${
                            selected === key
                                ? 'bg-yellow-400 text-white shadow-md border-2 border-yellow-500'
                                : 'bg-white text-gray-800 shadow-sm hover:shadow-md border-2 border-gray-100'
                        }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                            selected === key ? 'bg-yellow-500' : 'bg-gray-100'
                        }`}>
                          <span className={`font-bold ${selected === key ? 'text-white' : 'text-gray-600'}`}>{key}.</span>
                        </div>
                        <div>{label}</div>
                      </div>
                    </button>
                ))}
              </div>

              {/* Navigation Controls */}
              <div className="w-full max-w-4xl flex justify-between items-center bg-white rounded-xl shadow-sm p-4">
                <button
                    className={`flex items-center px-6 py-3 rounded-lg transition-all ${
                        current === 0
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    onClick={handlePrev}
                    disabled={current === 0}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Anterior
                </button>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold shadow-md">
                    {timeLeft}
                  </div>
                </div>

                <button
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105"
                    onClick={handleNext}
                >
                  {current === questions.length - 1 ? 'Finalizar' : 'Próxima'}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
        )}
      </>
  );
};

export default Quiz;