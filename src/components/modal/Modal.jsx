import "./Modal.css";

const Modal = ({ modalActive, setModalActive, children }) => {
  return (
    <div className={modalActive ? "modal-bgd modal-active" : "modal-bgd"}
      id="form-modal"
      onClick={() => setModalActive(false)}
    >

      <div className="modal-form-container"
        onClick={(e) => e.stopPropagation()}>
        <button
          className="close-btn"
          onClick={() => setModalActive(false)}
        // type="reset"
        >X</button>
        {children}
      </div>
    </div>

  );
};

export default Modal;


