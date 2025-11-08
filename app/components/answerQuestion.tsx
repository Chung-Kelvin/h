import Image from "next/image";
import { useState } from "react";

interface AnswerQuestionProps {
  nextStep: () => void;
}

export default function AnswerQuestion({ nextStep }: AnswerQuestionProps) {
  const [questionNo, setQuestionNo] = useState<string>("ques_1");

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
                <Image
                  src="/img/bear-login.jpg"
                  alt="cute bear"
                  className="rounded-lg"
                  width={300}
                  height={300}
                />
                <p>Quỳnh Nhi thích được gọi là gì?</p>
              </div>
              {/* <div>
                <input
                  type="text"
                  id="answerInput"
                  // liên kết với state
                />
              </div> */}
              <button
                id="loginBtn"
                onClick={() => handleNextQuestion("ques_2")}
                className="enter-btn mt-4"
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

                <Image
                  src="/img/bear-login.jpg"
                  alt="cute bear"
                  className="rounded-lg"
                  width={300}
                  height={300}
                />

                <p>Bé Nhi thích gì nhất?</p>
              </div>

              <ul className="answers">
                <li>
                  <button className="answer-btn">
                    A. Thích nói chuyện với anh
                  </button>
                </li>
                <li>
                  <button className="answer-btn">B. ..</button>
                </li>
                <li>
                  <button className="answer-btn">
                    C. Một bản nhạc thật hay
                  </button>
                </li>
                <li>
                  <button className="answer-btn">D. Những chiếc ánh kem</button>
                </li>
              </ul>

              <button
                id="loginBtn"
                onClick={() => handleNextQuestion("ques_3")}
                className="enter-btn mt-4"
              >
                Next
              </button>
            </div>
          </div>
        );
      case "ques_3":
        return (
          <div className="answer-question-section">
            <div className="question-card" id="questionNumber1">
              <div className="question">
                <h2>Câu hỏi 3:</h2>
                <p>Điều ước sinh nhật tuổi 18 của bé Nhi là gì?</p>
                <Image
                  src="/img/bear-login.jpg"
                  alt="cute bear"
                  className="rounded-lg"
                  width={300}
                  height={300}
                />
              </div>
              <div>
                <textarea
                  id="comment"
                  // liên kết với state
                  placeholder="Hãy viết gì đó vào đây..."
                  rows={5} // số dòng hiển thị
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
                className="enter-btn mt-4"
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
