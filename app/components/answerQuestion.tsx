import { set } from "animejs";
import Image from "next/image";
import { useEffect, useState } from "react";

interface AnswerQuestionProps {
  nextStep: () => void;
  onValueChange: (value: string) => void;
}

export default function AnswerQuestion({
  nextStep,
  onValueChange,
}: AnswerQuestionProps) {
  const [questionNo, setQuestionNo] = useState<string>("ques_1");

  const [answers1, setAnswer] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
    onValueChange(e.target.value);
  };

  const handleNextQuestion = (nextQues: string) => {
    if (nextQues === "next") {
      nextStep();
      return;
    }
    setQuestionNo(nextQues);
  };

  const renderQuestion = () => {
    switch (questionNo) {
      case "ques_1":
        return (
          <div className="answer-question-section">
            {/* Câu hỏi 1 */}
            <div className="question-card" id="questionNumber1">
              <div className="question">
                <h2>Câu hỏi 1:</h2>
                <div className="flex justify-center my-4">
                  <Image
                    src="/img/cat-6.jpg"
                    alt="cute bear"
                    className="rounded-lg"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="my-2">
                  <p>Quỳnh Nhi thích được gọi là gì?</p>
                </div>
              </div>
              <div className="password-box">
                <input
                  type="text"
                  id="password"
                  maxLength={20}
                  placeholder="Hãy nhập câu trả lời của bạn..."
                  value={answers1}
                  onChange={handleChange}
                />
                <span className="icon">♡</span>
              </div>
              <p id="error-message" className="text-red-500 mt-2">
                {answers1.trim() === "" && "❌ Vui lòng nhập câu trả lời!"}
              </p>
              <button
                id="loginBtn"
                onClick={() => handleNextQuestion("ques_2")}
                disabled={answers1.trim() === ""}
                className="enter-btn absolute bottom-4"
              >
                Next
              </button>
            </div>
          </div>
        );
      case "ques_2":
        return (
          <div className="answer-question-section">
            <div className="question-card" id="questionNumber1">
              <div className="question">
                <h2>Câu hỏi 2:</h2>

                <div className="flex justify-center my-4">
                  <Image
                    src="/img/cat-2.jpg"
                    alt="cute bear"
                    className="rounded-lg"
                    width={300}
                    height={300}
                  />
                </div>

                <p>{answers1} thích gì nhất?</p>
              </div>

              <ul className="answers">
                <li>
                  <button className="answer-btn">
                    A. Thích nói chuyện với anh
                  </button>
                </li>
                <li>
                  <button className="answer-btn">
                    B. Một anh người yêu ngọt ngào
                  </button>
                </li>
                <li>
                  <button
                    className="answer-btn"
                    onClick={() => handleNextQuestion("ques_3")}
                  >
                    C. Một bản nhạc thật hay
                  </button>
                </li>
                <li>
                  <button className="answer-btn">D. Những chiếc ánh kem</button>
                </li>
              </ul>

              {/* <button
                id="loginBtn"
                onClick={() => handleNextQuestion("ques_3")}
                className="enter-btn absolute bottom-4"
              >
                Next
              </button> */}
            </div>
          </div>
        );
      case "ques_3":
        return (
          <div className="answer-question-section">
            <div className="question-card" id="questionNumber1">
              <div className="question">
                <h2>Câu hỏi 3:</h2>
                <p>Điều ước sinh nhật tuổi 18 của {answers1} là gì?</p>
                <div className="flex justify-center my-4">
                  <Image
                    src="/img/cat-3.jpg"
                    alt="cute bear"
                    className="rounded-lg"
                    width={280}
                    height={280}
                  />
                </div>
              </div>
              <div>
                <textarea
                  id="comment"
                  placeholder="Hãy viết gì đó vào đây..."
                  rows={5}
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    resize: "none",
                  }}
                />
              </div>

              <button
                id="loginBtn"
                className="enter-btn absolute bottom-4"
                onClick={() => handleNextQuestion("next")}
              >
                SUBMIT
              </button>
            </div>
          </div>
        );
    }
  };

  return <>{renderQuestion()}</>;
}
