import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  'id': number;
  'Company': string;
  'Name': string;
  'Additional': string;
  'Street': string;
  'Postal Code': string;
  'Country': string;
  'IBAN': string;
  'BIC': string;
  'Bank Name': string;
  'Fax': string;
  'E-mail': string;
  'Birthday': string;
  'Homepage': string;
}

type UsersState = {
  users: User[];
  tempUsers: Object;
  tableHeader: string[];
}

const initialState: UsersState = {
  users: [],
  tempUsers: {},
  tableHeader: ['Company', 'Name', 'Additional', 'Street',
    'Postal Code', 'Country', 'IBAN', 'BIC',
    'Bank Name', 'Fax', 'E-mail', 'Birthday', 'Homepage'],
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addTempUser(state: UsersState, action: PayloadAction<Object>) {
      state.tempUsers = { id: new Date().toISOString(), ...state.tempUsers, ...action.payload }
    },
    clearTempUser(state: UsersState) {
      state.tempUsers = {};
    },
    addUser(state: UsersState) {
      if (state.users && state.tempUsers) {
        state.users.push(JSON.parse(JSON.stringify(state.tempUsers)));
      }

    },
    removeUser(state: UsersState, action: PayloadAction<string | number>) {
      if (state.users) {
        state.users = state.users.filter(user => user.id !== action.payload);

      }
    }
  },
});

export const { addTempUser, clearTempUser, addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

