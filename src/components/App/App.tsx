import { useState } from "react";
import { useDispatch } from "react-redux";

import { addUser } from "../../store/slice/userSlice";
import FormBankData from "../Forms/FormBankData";
import FormContact from "../Forms/FormContact";
import FormInvoceAddress from "../Forms/FormInvoceAddress";
import Modal from "../modal/Modal";

import Table from "../table/Table.jsx";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const [modalActive, setModalActive] = useState(false);
  const [formInvoceAddressActive, setFormInvoceAddressActive] = useState(true);
  const [formBankDataActive, setFormBankDataActive] = useState(false);
  const [formContactActive, setFormContactActive] = useState(false);

  function handleAction() {
    if (text.trim().length) {
      dispatch(addUser({ text }));
      setText("");
    }
  }

  return (
    <div className="App">
      <button className="open-btn" onClick={() => setModalActive(true)}>
        <span>Add</span>
      </button>
      <label>
        <input
          placeholder="new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAction}>Add</button>
      </label>

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
