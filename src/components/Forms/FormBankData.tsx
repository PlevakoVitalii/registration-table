import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../hook/hook";
import { addTempUser, clearTempUser } from "../../store/slice/userSlice";

import "./Form.modules.css";

interface FormBankDataProps {
  formActive: boolean;
  setFormActive: (props: boolean) => void;
  setModalActive: (props: boolean) => void;
  setPrevForm: (props: boolean) => void;
  setNextForm: (props: boolean) => void;
}

const FormBankData: React.FC<FormBankDataProps> = ({
  formActive,
  setFormActive,
  setModalActive,
  setPrevForm,
  setNextForm,
}) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      IBAN: "",
      BIC: "",
      Bank_Name: "",
    },
  });

  const onSubmit = (data: Object) => {
    dispatch(addTempUser(data));
    setFormActive(false);
    setNextForm(true);
  };

  const openPrevForm = () => {
    setFormActive(false);
    setPrevForm(true);
  };

  const closeForm = () => {
    reset();
    setModalActive(false);
    dispatch(clearTempUser());
  };

  return (
    <form
      className={formActive ? "modal-form form-active" : "modal-form"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="modal-form-title">Bank Data</h3>

      <div className="modal-form-field">
        <label className="modal-field-name">IBAN *</label>
        <input
          {...register("IBAN", { required: true })}
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
        <button
          className="modal-form-button"
          type="reset"
          onClick={() => closeForm()}
        >
          Cancel
        </button>
        <button className="modal-form-button" onClick={() => openPrevForm()}>
          Previous
        </button>
        <button className="modal-form-button modal-form-button-active">
          Next
        </button>
      </div>
    </form>
  );
};

export default FormBankData;
