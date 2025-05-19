// src/components/Quiz.tsx
import { useState, useEffect, useRef } from 'react';
import { questions } from '../data/questions';
import confetti from 'canvas-confetti';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

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

  if (showResult) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-4">🎉 Quiz Finalizado!</h1>

          <div className="text-6xl md:text-8xl font-extrabold text-gray-800 mb-2">
            {score} / {questions.length}
          </div>

          <p className="text-xl text-gray-600 mb-8">Pontuação total</p>

          {/* Add this Link button to return to home */}
          <Link
              to="/home"
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Voltar para Home
          </Link>
        </div>
    );
  }

  return (
      <div className="min-h-screen bg-white flex flex-col items-center p-6">
        {/* Progress steps */}
        <div className="w-full max-w-2xl flex justify-between items-center mb-6">
          {questions.map((_, index) => (
              <div
                  key={index}
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                      index === current ? 'bg-yellow-400 text-white border-yellow-400' : 'bg-gray-200 text-gray-600 border-gray-400'
                  }`}
              >
                {index + 1}
              </div>
          ))}
        </div>

        {/* Question */}
        <div className="w-full max-w-3xl bg-yellow-400 text-white text-center text-2xl font-medium p-6 rounded-md mb-8">
          {question.question}
        </div>

        {/* Options */}
        <div className="w-full max-w-3xl grid grid-cols-2 gap-6 mb-8">
          {question.options.map(({ key, label }) => (
              <button
                  key={key}
                  onClick={() => handleSelect(key)}
                  className={`p-6 border rounded-md text-lg font-bold text-center ${
                      selected === key
                          ? 'bg-yellow-400 text-white'
                          : 'bg-gray-200 text-black hover:bg-gray-300'
                  }`}
              >
                <div className="text-left font-semibold mb-2">{key}.</div>
                <div className="text-center">{label}</div>
              </button>
          ))}
        </div>

        {/* Controls */}
        <div className="w-full max-w-3xl flex justify-between items-center">
          <button
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-300"
              onClick={handlePrev}
              disabled={current === 0}
          >
            ◀ Previous
          </button>

          <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold">
            {timeLeft}
          </div>

          <div className="flex gap-4">
            <button
                className="bg-yellow-400 text-white px-6 py-2 rounded shadow hover:bg-yellow-500"
                onClick={handleNext}
            >
              {current === questions.length - 1 ? 'Finish ▶' : 'Next ▶'}
            </button>
          </div>
        </div>
      </div>
  );
};

export default Quiz;