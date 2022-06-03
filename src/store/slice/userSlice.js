import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    tempUsers: {},
    tableHeader: ['id', 'text', 'Company',
      'Name', 'Additional', 'Street',
      'Country', 'IBAN', 'BIC', 'Bank Name',
      'Fax', 'E-mail', 'Birthday', 'Homepage'],
  },
  reducers: {
    addTempUser(state, action) {
      state.tempUsers = { ...state.tempUsers, ...action.payload }
      alert((JSON.stringify(state.tempUsers)));
    },
    clearTempUser(state) {
      state.tempUsers = {};

    },
    addUser(state, action) {
      state.users.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        // 'Company': action.payload.Company,
        // 'Name': action.payload.Name,
        // Additional: action.payload.Additional,
        // Street: action.payload.Street,
        // 'Postal Code': action.payload.PostalCode,
        // 'Country': action.payload.Country,
        // 'IBAN': action.payload.IBAN,
        // 'BIC': action.payload.BIC,
        // 'Bank Name': action.payload.BankName,
        // 'Fax': action.payload.Fax,
        // 'E-mail': action.payload.EMail,
        // 'Birthday': action.payload.Birthday,
        // 'Homepage': action.payload.Homepage,
      });
      console.log((state.users));
      alert((JSON.stringify(state.users)));

    },
    removeUser(state, action) {
      state.users = state.users.filter(user => user.id !== action.payload.id);
    },
  },
});

export const { addTempUser, clearTempUser, addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;