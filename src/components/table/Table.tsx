import { useAppSelector } from "../../hook/hook";
import { useAppDispatch } from "../../hook/hook";

import { removeUser } from "../../store/slice/userSlice";

import { IoTrashSharp } from "react-icons/io5";

import "./Table.css";

const Table: React.FC = () => {
  const users = useAppSelector((state) => state.users.users);
  const tableHeader = useAppSelector((state) => state.users.tableHeader);
  const dispatch = useAppDispatch();

  return (
    <div className="wrap">
      <table>
        <thead>
          <tr>
            <th style={{ color: "#376b8d" }}>___</th>
            {tableHeader.map((key) => (
              <th key={key}>{key} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="deleter">
                <IoTrashSharp
                  onClick={() => dispatch(removeUser(`${user.id}`))}
                />
              </td>
              {Object.values(user)
                .slice(1, Object.values(user).length)
                .map((val) => (
                  <td key={Math.random()}>{val}</td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
