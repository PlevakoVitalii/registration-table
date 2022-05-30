import { useState } from "react";
import { useDispatch } from "react-redux";

import { addUser } from "../../store/slice/userSlice";
// import FormBankData from "../Forms/FormBankData";
// import FormContact from "../Forms/FormContact";
import FormInvoceAddress from "../Forms/FormInvoceAddress";
// import Form from "../Forms/FormInvoceAddress";
import Modal from "../modal/Modal";

import Table from "../table/Table.jsx";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const [modalActive, setModalActive] = useState(false);

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

      <Modal active={modalActive} setActive={setModalActive}>
        <FormInvoceAddress active={modalActive} setActive={setModalActive} />
        {/* <FormBankData active={modalActive} setActive={setModalActive} />
        <FormContact active={modalActive} setActive={setModalActive} /> */}
      </Modal>
    </div>
  );
}

export default App;
