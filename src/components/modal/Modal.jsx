import { useDispatch } from "react-redux";
import { clearTempUser } from "../../store/slice/userSlice";
import "./Modal.css";

const Modal = ({ modalActive, setModalActive, children }) => {

  const dispatch = useDispatch();

  function closeModal() {
    dispatch(clearTempUser());
    setModalActive(false);
  }

  return (
    <div className={modalActive ? "modal-bgd modal-active" : "modal-bgd"}
      id="form-modal"
      onClick={() => closeModal()}
    >

      <div className="modal-form-container"
        onClick={(e) => e.stopPropagation()}>
        <button
          className="close-btn"
          onClick={() => closeModal()}
        >X</button>
        {children}
      </div>
    </div>

  );
};

export default Modal;


