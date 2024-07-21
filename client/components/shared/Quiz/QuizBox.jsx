"use client";

import { useState, useEffect } from "react";
import quizData from "./Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function getRandomQuestions(data, numQuestions) {
  const shuffled = data.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numQuestions);
}

function Quiz() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    if (startQuiz) {
      setQuestions(getRandomQuestions(quizData, 10));
    }
  }, [startQuiz]);

  useEffect(() => {
    if (!startQuiz) return;
    if (timeLeft === 0) {
      handleNextQuestion();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [startQuiz, timeLeft]);

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(15);
    } else {
      setShowScore(true);
    }
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };

  const restartQuiz = () => {
    setStartQuiz(false);
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(15);
  };

  return (
    <div id="QuizId" className="flex items-center justify-center px-4 md:px-8 lg:px-20 py-4 md:py-8">
      <div className="flex flex-col bg-[#191515] w-full max-w-[80vw] rounded-3xl h-[50vh] md:h-[80vh] p-6 md:p-10 lg:p-16 items-center place-content-center relative">
        {!startQuiz ? (
          <div className="flex flex-col items-center w-full justify-center text-[#FFFFFF] gap-7">
            <h1 className="text-lg text-center md:text-4xl font-bold">
              Sustainability Awareness Quiz
            </h1>
            <div className="text-lg md:text-xl">
              <h1 className="text-sm md:text-2xl font-semibold">
                Instructions:
              </h1>
              <ul className="list-disc md:leading-10 text-sm md:text-xl">
                <li>The quiz consists of 10 random questions.</li>
                <li>
                  Scoring
                  <ul className="list-decimal">
                    <li>Each correct answer earns you 1 point.</li>
                    <li>No points are deducted for incorrect answers.</li>
                  </ul>
                </li>
                <li>Read each question carefully.</li>
                <li>Manage your time effectively and stay focused.</li>
              </ul>
            </div>
            <button
              onClick={() => setStartQuiz(true)}
              className="bg-[#57C7FF] text-black px-3 md:px-8 text-sm md:text-3xl font-semibold py-2 md:py-4 rounded-2xl hover:bg-[#4AB0E0] transition duration-300"
            >
              Start Quiz
            </button>
          </div>
        ) : showScore ? (
          <div className="flex flex-col items-center justify-center text-[#FFFFFF] gap-7">
            <h1 className="text-lg md:text-5xl font-bold my-6">Final Result</h1>
            <h2 className="text-lg md:text-4xl my-3">
              You scored {score} out of {questions.length}
            </h2>
            <h2 className="text-lg md:text-4xl my-2">
              Accuracy Rate: {(score / questions.length) * 100}%
            </h2>
            <button
              onClick={restartQuiz}
              className="bg-[#57C7FF] text-black px-6 md:px-8 text-lg md:text-3xl font-semibold py-2 md:py-4 rounded-2xl hover:bg-[#4AB0E0] transition duration-300 my-10"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-[#FFFFFF] gap-7 w-full">
            <h1 className="text-sm text-center md:text-4xl font-bold">
              Sustainability Awareness Quiz
            </h1>
            <div className="flex flex-col items-center w-full">
              <div className="self-center text-center md:text-2xl w-full mb-6">
                <div className="text-sm md:text-2xl font-semibold text-left w-full">
                  Question {currentQuestion + 1}/{questions.length}
                </div>
                <div className="text-sm md:text-2xl my-2 text-left">
                  {questions[currentQuestion]?.question}
                </div>
                <div className="text-red-500 text-right text-sm md:text-xl">
                  Time left: {timeLeft}s
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-5 w-full">
                {questions[currentQuestion]?.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      handleAnswerOptionClick(
                        option === questions[currentQuestion]?.correctAnswer
                      )
                    }
                    className="bg-[#57C7FF] text-black px-1 text-xs md:text-2xl font-semibold py-1 md:py-3 rounded-2xl hover:bg-[#4AB0E0] transition duration-300 w-full"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="absolute right-0 top-0">
          <FontAwesomeIcon
            icon={faStar}
            style={{
              color: "#FFD700",
              transform: "rotate(10deg)",
            }}
            className="text-5xl md:text-[150px]"
          />
        </div>
        <div className="absolute bottom-0 left-0">
          <FontAwesomeIcon
            icon={faStar}
            style={{
              color: "#FFD700",
              transform: "rotate(30deg)",
            }}
            className="text-5xl md:text-[150px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Quiz;

