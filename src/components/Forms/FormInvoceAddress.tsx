import { useForm } from "react-hook-form";

import { useAppDispatch } from "../../hook/hook";

import { addTempUser, clearTempUser } from "../../store/slice/userSlice";

import "./Form.modules.css";

interface FormInvoceAddressProps {
  formActive: boolean;
  setFormActive: Function;
  setModalActive: Function;
  setNextForm: Function;
}

const FormInvoceAddress: React.FC<FormInvoceAddressProps> = ({
  formActive,
  setFormActive,
  setModalActive,
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
      Company: "",
      Name: "",
      Additional: "",
      Street: "",
      "Postal Code": "",
      Country: "",
    },
  });

  const onSubmit = (data: Object) => {
    dispatch(addTempUser(data));
    setFormActive(false);
    setNextForm(true);
  };

  const closeForm = () => {
    reset();
    setModalActive(false);
    clearTempUser();
  };

  return (
    <form
      className={formActive ? "modal-form form-active" : "modal-form"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="modal-form-title">Invoce Address</h3>
      <div className="modal-form-field">
        <label className="modal-field-name">Company *</label>
        <input
          {...register("Company", { required: true })}
          className="modal-field-input"
        />
      </div>
      {errors.Company && <p>This field is required</p>}

      <div className="modal-form-field">
        <label className="modal-field-name">Name *</label>
        <input
          {...register("Name", { required: true })}
          className="modal-field-input"
        />
      </div>
      {errors.Name && !errors.Company && <p>This field is required</p>}

      <div className="modal-form-field">
        <label className="modal-field-name">Additional</label>
        <input {...register("Additional")} className="modal-field-input" />
      </div>

      <div className="modal-form-field">
        <label className="modal-field-name">Street</label>
        <input {...register("Street")} className="modal-field-input" />
      </div>

      <div className="modal-form-field">
        <label className="modal-field-name">Postal Code</label>
        <input {...register("Postal Code")} className="modal-field-input" />
      </div>

      <div className="modal-form-field">
        <label className="modal-field-name">Country</label>
        <input {...register("Country")} className="modal-field-input" />
      </div>

      <div className="modal-form-button-container">
        <button className="modal-form-button" onClick={() => closeForm()}>
          Cancel
        </button>
        <button className="modal-form-button modal-form-button-active">
          Next
        </button>
      </div>
    </form>
  );
};

export default FormInvoceAddress;
