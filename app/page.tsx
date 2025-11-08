"use client";

import { useEffect, useRef, useState } from "react";
import AnswerQuestion from "./components/answerQuestion";
import Login from "./components/login";
import ResetPopup from "./components/resetPopup";
import Congratulation from "./components/congratulation";

export default function Home() {
  const heartsContainer = useRef<HTMLDivElement>(null);
  const generateHearts = () => {
    if (!heartsContainer.current) return;

    for (let i = 0; i < 2; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart"); // dùng CSS Module
      heart.textContent = "❤";

      // Vị trí và kích thước ngẫu nhiên
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = 14 + Math.random() * 20 + "px";
      heart.style.animationDuration = 2 + Math.random() * 2 + "s";

      heartsContainer.current.appendChild(heart);

      // Xóa trái tim sau khi bay xong
      setTimeout(() => heart.remove(), 4000);
    }
  };

  const handleLoginSuccess = () => {
    setStep("reset");
  };

  const handleResetStep = () => {
    setStep("answer");
  };

  const handleAnswer = () => {
    setStep("congrate");
  };

  const [step, setStep] = useState<"login" | "reset" | "answer" | "congrate">(
    "answer"
  );

  useEffect(() => {
    const interval = setInterval(generateHearts, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      {(step === "login" || step === "reset" || step === "answer") && (
        <div ref={heartsContainer} className="hearts-container"></div>
      )}
      {step === "login" && <Login nextStep={handleLoginSuccess}></Login>}
      {step === "reset" && <ResetPopup nextStep={handleResetStep}></ResetPopup>}
      {step === "answer" && (
        <AnswerQuestion nextStep={handleAnswer}></AnswerQuestion>
      )}
      {step === "congrate" && <Congratulation></Congratulation>}
    </main>
  );
}
