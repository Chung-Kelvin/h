"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { animate, Timeline, createTimeline, set } from "animejs";
import TypingAnime from "./typing";
import TypingChar from "./typing";
import Typed from "typed.js";

interface GiftProps {
  nickName?: string;
}

export default function Gift({ nickName }: GiftProps) {
  const [open, setOpen] = useState(true);

  const contentLetter =
    "🎉 Chúc mừng sinh nhật tuổi 18! 🎂 Chúc bạn luôn mạnh khỏe 💪, hạnh phúc ❤️ và vững bước trên con đường trưởng thành 🌟 Chúc bạn luôn mạnh khỏe 💪, hạnh phúc ❤️ và vững bước trên con đường trưởng thành 🌟Chúc bạn luôn mạnh khỏe 💪, hạnh phúc ❤️ và vững bước trên con đường trưởng thành 🌟, với thật nhiều thành công 🏆 và trải nghiệm đáng nhớ ✨";

  const envelopeRef = useRef<HTMLDivElement>(null);

  const card = useRef<HTMLDivElement>(null);
  const cardContentRef = useRef<HTMLDivElement>(null);

  const tl = useRef<Timeline | null>(null);

  const typeContentRef = useRef(null);
  const signatureRef = useRef(null);
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
      const typed = new Typed(typeContentRef.current, {
        strings: [contentLetter],
        typeSpeed: 80,
        loop: false,
        showCursor: true,
        cursorChar: "|",
        startDelay: 2000,
        onComplete: () => {
          setTimeout(() => {
            new Typed(signatureRef.current, {
              strings: ["ĐiBộVuốtRosé"],
              typeSpeed: 80,
              showCursor: false,
            });
          }, 1000);
        },
      });

      return () => typed.destroy();
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
              className="card-content text-xl font-semibold p-6"
            >
              <div className="mb-6">
                <p className="text-left indent-8 whitespace-pre-line mb-8">
                  Dear {nickName || "Quỳnh Nhi"},
                </p>
              </div>
              <div>
                <span className="text-left" ref={typeContentRef}></span>
              </div>

              <div className="mt-6 text-right">
                <span
                  ref={signatureRef}
                  className=" text-lg font-semibold italic"
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div className="front"></div>
      </div>
    </>
  );
}
