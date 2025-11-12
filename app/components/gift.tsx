"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { animate, Timeline, createTimeline, set } from "animejs";
import TypingAnime from "./typing";
import TypingChar from "./typing";

function TypingText({ text, speed = 100 }: { text: string; speed?: number }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval); // cleanup
  }, [text, speed]);

  return <span>{displayedText}</span>;
}

export default function Gift() {
  const [open, setOpen] = useState(true);

  const contentLetter =
    "🎉 Chúc mừng sinh nhật tuổi 18! 🎂 Chúc bạn luôn mạnh khỏe 💪, hạnh phúc ❤️ và vững bước trên con đường trưởng thành 🌟 Chúc bạn luôn mạnh khỏe 💪, hạnh phúc ❤️ và vững bước trên con đường trưởng thành 🌟Chúc bạn luôn mạnh khỏe 💪, hạnh phúc ❤️ và vững bước trên con đường trưởng thành 🌟, với thật nhiều thành công 🏆 và trải nghiệm đáng nhớ ✨";

  const envelopeRef = useRef<HTMLDivElement>(null);

  const card = useRef<HTMLDivElement>(null);
  const cardContentRef = useRef<HTMLDivElement>(null);

  const tl = useRef<Timeline | null>(null);
  useEffect(() => {
    tl.current = createTimeline({ autoplay: false })
      .add(
        ".card",
        { translateY: -80, easing: "easeOutQuad", duration: 700 },
        0
      )
      .add(".card", {
        height: "500px",
        width: "300px",
        easing: "easeOutQuad",
        zIndex: 20,
        duration: 700,
      });
  }, []);

  const handleClick = () => {
    if (!tl.current) return;
    if (open) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
    setOpen(!open);
  };
  return (
    <>
      <div className="container" onClick={handleClick}>
        <div ref={envelopeRef} className="envelope">
          <div className="flap"></div>
          <div
            ref={card}
            className="card rounded-lg shadow-lg transition-all duration-500 overflow-hidden leading-relaxed text-gray-800"
          >
            <div
              ref={cardContentRef}
              className="card-content text-center text-xl font-semibold p-6"
            >
              <div className="mb-6">
                <p className="text-left indent-8 whitespace-pre-line mb-8">
                  Dear Quỳnh Nhi
                </p>
              </div>
              <p className="text-left">{contentLetter}</p>
              <div>
                <p className="text-right text-lg font-semibold italic">
                  ĐiBộVuốtRosé
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="front"></div>
      </div>
    </>
  );
}
