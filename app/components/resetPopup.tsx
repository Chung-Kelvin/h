interface ResetProps {
  nextStep: () => void;
}
export default function ResetPopup({ nextStep }: ResetProps) {
  const clickButtonEnter = () => {
    nextStep();
  };

  return (
    <div className="message-box show" id="messageBox">
      <div className="message-content">
        <h3>Đăng nhập không thành công</h3>
        <p>
          Bạn đã nhập sai mật khẩu quá nhiều lần. Để lấy lại mật khẩu, vui lòng
          thực hiện theo các bước sau
        </p>
        <button id="nextBtn" onClick={clickButtonEnter}>
          Next
        </button>
      </div>
    </div>
  );
}
