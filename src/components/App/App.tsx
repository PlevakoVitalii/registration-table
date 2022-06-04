import { useState } from "react";

import Table from "../table/Table.jsx";
import Modal from "../modal/Modal";
import FormInvoceAddress from "../Forms/FormInvoceAddress";
import FormBankData from "../Forms/FormBankData";
import FormContact from "../Forms/FormContact";

import "./App.css";

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [formInvoceAddressActive, setFormInvoceAddressActive] = useState(false);
  const [formBankDataActive, setFormBankDataActive] = useState(false);
  const [formContactActive, setFormContactActive] = useState(false);

  function openForm() {
    setModalActive(true);
    setFormInvoceAddressActive(true);
    setFormBankDataActive(false);
    setFormContactActive(false);
  }

  return (
    <div className="App">
      <button className="open-btn" onClick={() => openForm()}>
        <span>Add</span>
      </button>
      <Table />
      <Modal modalActive={modalActive} setModalActive={setModalActive}>
        {formInvoceAddressActive && (
          <FormInvoceAddress
            setModalActive={setModalActive}
            formActive={formInvoceAddressActive}
            setFormActive={setFormInvoceAddressActive}
            setNextForm={setFormBankDataActive}
          />
        )}

        {formBankDataActive && (
          <FormBankData
            setModalActive={setModalActive}
            formActive={formBankDataActive}
            setFormActive={setFormBankDataActive}
            setPrevForm={setFormInvoceAddressActive}
            setNextForm={setFormContactActive}
          />
        )}
        {formContactActive && (
          <FormContact
            setModalActive={setModalActive}
            formActive={formContactActive}
            setFormActive={setFormContactActive}
            setPrevForm={setFormBankDataActive}
          />
        )}
      </Modal>
    </div>
  );
}

export default App;
