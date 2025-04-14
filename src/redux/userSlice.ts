import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/user";

const initialState: {
    user: User | null;
    isLoggedIn: boolean;
} = {
    user: null,
    isLoggedIn: false,
};

export const userSlice = createSlice( {
    name: 'user',
    initialState,
    reducers: {
        setUser: ( state, action: PayloadAction<User> ) =>
        {
            state.user = action.payload;
        },
        setIsLoggedIn: ( state, action: PayloadAction<boolean> ) =>
        {
            state.isLoggedIn = action.payload;
        },
    }
},
);

export const { setUser, setIsLoggedIn } = userSlice.actions;
export const userReducer = userSlice.reducer;