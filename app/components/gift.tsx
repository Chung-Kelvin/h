import Image from "next/image";

export default function Gift() {
  return (
    <>
      <div className="envelope">
        <div className="back"></div>
        <div className="letter">
          <div className="tex text-center">
            <h1>Dear,</h1>
          </div>
        </div>
        <div className="front"></div>
        <div className="top">
          <div className="seal">
            <Image
              src="/img/seal-letter.png"
              alt="cute bear"
              className=" rounded-lg"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className="shadow"></div>
      </div>
    </>
  );
}
