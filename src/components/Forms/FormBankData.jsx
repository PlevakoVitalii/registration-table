import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTempUser } from "../../store/slice/userSlice";

import "./Form.modules.css";

const FormBankData = ({ formActive, setFormActive, setModalActive, setPrevForm, setNextForm }) => {

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      IBAN: "",
      BIC: "",
      'Bank_Name': "",
    }
  });

  const onSubmit = (data) => {
    dispatch(addTempUser((data)));
    setFormActive(false);
    setNextForm(true);
  };

  const openPrevForm = () => {
    setFormActive(false);
    setPrevForm(true)
  }

  const closeForm = () => {
    reset()
    setModalActive(false);
  }

  return (
    <form className={formActive ? "modal-form form-active" : "modal-form"}
      onSubmit={handleSubmit(onSubmit)}>
      <h3 className="modal-form-title">Bank Data</h3>

      <div className="modal-form-field">
        <label className="modal-field-name">IBAN *</label>
        <input {...register("IBAN", { required: true })}
          className="modal-field-input"
        />
      </div>
      {errors.IBAN && <p>This field is required</p>}

      <div className="modal-form-field">
        <label className="modal-field-name">BIC *</label>
        <input
          {...register("BIC", { required: true })}
          className="modal-field-input"
        />
      </div>
      {errors.BIC && !errors.IBAN && <p>This field is required</p>}

      <div className="modal-form-field">
        <label className="modal-field-name">Bank Name *</label>
        <input
          {...register("Bank_Name", { required: true })}
          className="modal-field-input"
        />
      </div>
      {errors.Bank_Name && !errors.BIC && <p>This field is required</p>}

      <div className="modal-form-button-container">
        <button className="modal-form-button" type="reset"
          onClick={() => closeForm()}
        >Cancel</button>
        <button className="modal-form-button"
          onClick={() => openPrevForm()}>Previous</button>
        <button className="modal-form-button modal-form-button-active">Next</button>
      </div>
    </form>
  );
};

export default FormBankData;
