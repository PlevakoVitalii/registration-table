import { useState } from "react";
import { useDispatch } from "react-redux";

import { addUser } from "../../store/slice/userSlice";
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
      <label>
        <input
          placeholder="new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAction}>Add</button>
      </label>

      <Table />
      <button className="open-btn" onClick={() => setModalActive(true)}>
        Open Modal
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        <form action="">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button>Next</button>
        </form>
      </Modal>
    </div>
  );
}

export default App;
