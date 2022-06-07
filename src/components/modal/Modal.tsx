import { useAppDispatch } from "../../hook/hook";
import { clearTempUser } from "../../store/slice/userSlice";
import "./Modal.css";

interface ModalProps {
  modalActive: boolean;
  setModalActive: (props: boolean) => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  modalActive,
  setModalActive,
  children,
}) => {
  const dispatch = useAppDispatch();

  function closeModal() {
    dispatch(clearTempUser());
    setModalActive(false);
  }

  return (
    <div
      className={modalActive ? "modal-bgd modal-active" : "modal-bgd"}
      id="form-modal"
      onClick={() => closeModal()}
    >
      <div
        className="modal-form-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={() => closeModal()}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
