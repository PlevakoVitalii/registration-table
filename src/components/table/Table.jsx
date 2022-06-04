import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { removeUser } from "../../store/slice/userSlice";


import { IoTrashSharp } from "react-icons/io5";

import "./Table.css";

function Table() {
  const users = useSelector((state) => state.users.users);
  const tableHeader = useSelector((state) => state.users.tableHeader);
  const dispatch = useDispatch();

  return (
    <div className="wrap">
      <table>
        <thead>
          <tr>
            <th style={{ color: "#376b8d" }}>___</th>
            {tableHeader.map((key) =>
              <th key={key}>{key} </th>
            )}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} >
              <td className="deleter">
                <IoTrashSharp
                  onClick={() => dispatch(removeUser({ id: `${user.id}` }))}
                />
              </td>
              {Object.values(user).map((val) => (
                <td key={Math.random()}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

