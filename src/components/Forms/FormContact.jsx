import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTempUser, addUser, clearTempUser } from "../../store/slice/userSlice";

import "./Form.modules.css";

const FormContact = ({ formActive, setFormActive, setModalActive, setPrevForm }) => {

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      Fax: "",
      'E_mail': "",
      Birthday: "",
      Homepage: "",
    }
  });

  const onSubmit = (data) => {
    dispatch(addTempUser((data)));
    setFormActive(false);
    setModalActive(false);
    dispatch(addUser());
    dispatch(clearTempUser());
  };

  const openPrevForm = () => {
    setFormActive(false);
    setPrevForm(true)
  }

  const closeForm = () => {
    reset()
    setModalActive(false);
    dispatch(clearTempUser());
  }

  return (
    <form className={formActive ? "modal-form form-active" : "modal-form"}
      onSubmit={handleSubmit(onSubmit)}>
      <h3 className="modal-form-title">Contact</h3>

      <div className="modal-form-field">
        <label className="modal-field-name">Fax </label>
        <input {...register("Fax")}
          className="modal-field-input"
        />
      </div>

      <div className="modal-form-field">
        <label className="modal-field-name">E-mail </label>
        <input
          {...register("E_mail", {
            pattern: /[A-Za-z0-9]+@[a-z]+\.[a-z]{2,3}/
          })}
          className="modal-field-input"
        />
      </div>
      {errors.E_mail && <p>Please enter a valid email address</p>}

      <div className="modal-form-field">
        <label className="modal-field-name">Birthday</label>
        <input
          {...register("Birthday")}
          className="modal-field-input"
        />
      </div>

      <div className="modal-form-field">
        <label className="modal-field-name">Homepage</label>
        <input
          {...register("Homepage")}
          className="modal-field-input"
        />
      </div>

      <div className="modal-form-button-container">
        <button className="modal-form-button" type="reset"
          onClick={() => closeForm()}
        >Cancel</button>
        <button className="modal-form-button "
          onClick={() => openPrevForm()}>Previous</button>
        <button className="modal-form-button modal-form-button-active" >Save</button>
      </div>
    </form>
  );
};

export default FormContact;
