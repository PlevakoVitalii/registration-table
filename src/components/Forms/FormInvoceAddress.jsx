import { useState } from "react";
import { useForm } from "react-hook-form";

import "./Form.modules.css";

const FormInvoceAddress = ({ active, setActive }) => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      Company: "",
      Name: "",
      Additional: "",
      Street: "",
      'Postal Code': "",
      Country: "",
    }
  });


  const onSubmit = (data) => {
    alert(JSON.stringify(data)); //убрать етот код
    //Данные передать в обьект TempUsers

    reset()
    setActive(false);
    //Переклчиться на второй попап
  };

  const closeForm = (data) => {
    reset()
    setActive(false);
  }



  return (
    <form className="modal-form"
      onSubmit={handleSubmit(onSubmit)}>

      <h3 className="modal-form-title">Invoce Address</h3>
      <div className="modal-form-field">
        <label className="modal-field-name">Company *</label>
        <input {...register("Company", { required: true })}
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
        <input
          {...register("Additional")}
          className="modal-field-input"
        />
      </div>


      <div className="modal-form-field">
        <label className="modal-field-name">Street</label>
        <input
          {...register("Street")}
          className="modal-field-input"
        />
      </div>


      <div className="modal-form-field">
        <label className="modal-field-name">Postal Code</label>
        <input
          {...register("Postal Code")}
          className="modal-field-input"
        />
      </div>


      <div className="modal-form-field">
        <label className="modal-field-name">Country</label>
        <input
          {...register("Country")}
          className="modal-field-input"
        />
      </div>

      <div className="modal-form-button-container">
        <button className="modal-form-button" type="reset" onClick={() => closeForm()}>Cancel</button>
        <button className="modal-form-button modal-form-button-active" disabled={!isValid}>Next</button>
      </div>
    </form>
  );
};

export default FormInvoceAddress;
