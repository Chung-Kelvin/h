import Image from "next/image";
import { useState } from "react";
import Gift from "./gift";

export default function Congratulation() {
  const [clickGif, setClickGif] = useState(true);

  // setTimeout(() => {
  //   setClickGif(false);
  // }, 16000);

  const handleClickGift = () => {
    setClickGif(true);
  };

  return (
    <>
      <div id="wrapper" className="flex flex-col items-center">
        <div className="flag__birthday">
          <Image
            src="/img/1.png"
            alt="cute bear"
            className="flag__left"
            width={350}
            height={350}
          />

          <Image
            src="/img/1.png"
            alt="cute bear"
            className="flag__right"
            width={350}
            height={350}
          />
        </div>

        <div className="content">
          <div className="left">
            <div className="title">
              <div className="box__title">
                <h1 className="happy">
                  <span style={{ "--t": "4s" } as React.CSSProperties}>H</span>
                  <span style={{ "--t": "4.2s" } as React.CSSProperties}>
                    a
                  </span>
                  <span style={{ "--t": "4.4s" } as React.CSSProperties}>
                    p
                  </span>
                  <span style={{ "--t": "4.6s" } as React.CSSProperties}>
                    p
                  </span>
                  <span style={{ "--t": "4.8s" } as React.CSSProperties}>
                    y
                  </span>
                </h1>

                <h1 className="birthday">
                  <span style={{ "--t": "5s" } as React.CSSProperties}>B</span>
                  <span style={{ "--t": "5.2s" } as React.CSSProperties}>
                    i
                  </span>
                  <span style={{ "--t": "5.4s" } as React.CSSProperties}>
                    r
                  </span>
                  <span style={{ "--t": "5.6s" } as React.CSSProperties}>
                    t
                  </span>
                  <span style={{ "--t": "5.8s" } as React.CSSProperties}>
                    h
                  </span>
                  <span style={{ "--t": "6s" } as React.CSSProperties}>d</span>
                  <span style={{ "--t": "6.2s" } as React.CSSProperties}>
                    a
                  </span>
                  <span style={{ "--t": "6.4s" } as React.CSSProperties}>
                    y
                  </span>
                </h1>
                <div className="hat">
                  <Image
                    src="/img/hat.png"
                    alt="cute bear"
                    className="rounded-lg"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image_section">
          <div className="box__account">
            <div className="image">
              <Image
                src="/img/avt-1.jpg"
                alt="avatar"
                width={200}
                height={200}
              />
            </div>

            <div className="name">
              <span>Quỳnh Nhi</span>
            </div>

            <div className="balloon_one">
              <Image
                src="/img/balloon1.png"
                alt="balloon 1"
                width={100}
                height={100}
              />
            </div>

            <div className="balloon_two">
              <Image
                src="/img/balloon2.png"
                alt="balloon 2"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-4">
          {true && (
            <Image
              src="/img/wired-lineal-412-gift-hover-squeeze.gif"
              alt="cake"
              width={200}
              height={200}
              onClick={handleClickGift}
            />
          )}
        </div>
      </div>
      {clickGif && (
        <>
          {/* Overlay làm tối nền */}
          <div className="fixed inset-0 bg-black backdrop-blur-sm transition-opacity z-40"></div>

          {/* Hộp quà (phong bì) */}
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="animate-fade-in">
              <Gift />
            </div>
          </div>
        </>
      )}
    </>
  );
}
