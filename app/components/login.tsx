import Image from "next/image";
import { useState } from "react";

interface LoginProps {
  nextStep: () => void;
}

export default function Login({ nextStep }: LoginProps) {
  const urlImg = "public/img/bear-login.jpg";

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [attempt, setAttempt] = useState(0);

  const clickButtonEnter = () => {
    if (password === "" || password === null || password === undefined) {
      setError("❌ Vui lòng nhập mật khẩu!");
    } else {
      const newAttempt = attempt + 1;
      setAttempt(newAttempt);
      setError("❌ Bạn đã nhập sai mật khẩu rồi!");
      if (newAttempt >= 3) {
        nextStep();
      }
    }
  };

  return (
    <div id="loginCard" className="login-card shadow-xl">
      {/* Hình ảnh */}
      <Image
        src="/img/bear-login.jpg"
        alt="cute bear"
        className="rounded-lg"
        width={400}
        height={400}
      />

      {/* Nhóm input */}
      <div className="input-group mt-4">
        <label htmlFor="username">Username</label>
        <div className="password-box mb-3">
          <input
            type="text"
            value="Nhi"
            id="username"
            readOnly
            placeholder="Username"
          />
          <span className="icon">♡</span>
        </div>

        <label htmlFor="password" className="mt-2">
          Password
        </label>
        <div className="password-box">
          <input
            type="password"
            id="password"
            maxLength={20}
            placeholder="Password"
            value={password} // liên kết state
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="icon">♡</span>
        </div>

        {/* Thông báo lỗi */}
        {error && (
          <p id="error-message" className="text-red-500 mt-2">
            {error}
          </p>
        )}
      </div>

      <button
        id="loginBtn"
        onClick={clickButtonEnter}
        className="enter-btn mt-4"
      >
        ENTER
      </button>
    </div>
  );
}
