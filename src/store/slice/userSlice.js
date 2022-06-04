import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    tempUsers: {},
    tableHeader: ['Company',
      'Name', 'Additional', 'Street', 'Postal Code',
      'Country', 'IBAN', 'BIC', 'Bank Name',
      'Fax', 'E-mail', 'Birthday', 'Homepage'],
  },
  reducers: {
    addTempUser(state, action) {
      state.tempUsers = { ...state.tempUsers, ...action.payload }
    },
    clearTempUser(state) {
      state.tempUsers = {};
    },
    addUser(state) {
      state.users.push(
        { ...state.tempUsers }
      );

    },
    removeUser(state, action) {
      state.users = state.users.filter(user => user.id !== action.payload.id);
    },
  },
});

export const { addTempUser, clearTempUser, addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

