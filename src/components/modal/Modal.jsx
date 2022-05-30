import "./Modal.css";

const Modal = ({ active, setActive, children }) => {
  return (
    <div className={active ? "modal-bgd modal-active" : "modal-bgd"}
      id="form-modal"
      onClick={() => setActive(false)}>

      <div className="modal-form-container"
        onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setActive(false)}>X</button>

        {/* <form action="#" className="modal-form" data-netlify="true" id="form">
          <img src="./img/trezub.svg" alt="ukr-logo" />

          <h4 className="modal-form-title">Поділися, будь ласка, поштою</h4>
          <p className="modal-form-desrc">та запиши гуся до бандерозагону</p>

          <div className="modal-form-field">
            <label htmlFor="user-name" className="modal-field-name">
              Ім’я
            </label>
            <input
              type="text"
              className="modal-field-input"
              id="user-name"
              name="Ім’я"
            />
          </div>

          <div className="modal-form-field">
            <label htmlFor="user-email" className="modal-field-name">
              Email
            </label>
            <input
              type="email"
              className="modal-field-input"
              id="user-email"
              name="Email"
            />
          </div>

          <button className="modal-form-button" id="launch-btn">
            Запустити гуся
          </button>
        </form> */}

        {children}
      </div>
    </div>

  );
};

export default Modal;


