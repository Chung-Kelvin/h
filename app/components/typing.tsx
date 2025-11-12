import { useEffect, useRef } from "react";
import { animate, Timeline, createTimeline, set } from "animejs";
interface TypingAnimeProps {
  text: string;
  speed?: number; // ms per character
}

interface TypingCharProps {
  text: string;
  speed?: number; // ms per character
}

export default function TypingChar({ text, speed = 100 }: TypingCharProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Reset nội dung
    containerRef.current.innerHTML = "";

    // Tạo span cho từng ký tự
    const chars = text.split("").map((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = "0"; // ẩn ban đầu
      containerRef.current!.appendChild(span);
      return span;
    });

    // Anime.js gõ từng ký tự
    createTimeline().add(chars, {
      opacity: [0, 1],
      easing: "linear",
      duration: speed,
      delay: 0.5, // mỗi ký tự delay hơn ký tự trước
    });
  }, [text, speed]);

  return <span ref={containerRef} className="typing-char"></span>;
}
