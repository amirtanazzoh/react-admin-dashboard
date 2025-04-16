import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/user";
import { getUserByUserName } from "../services/users";

export const isUserLoggedIn = createAsyncThunk( 'user/isUserLoggedIn', async () =>
{
    const user = localStorage.getItem( 'user' );
    if ( !user ) return false;

    const parsedUser = JSON.parse( user ) as User;
    if ( !parsedUser ) return false;

    const userFromApi = await getUserByUserName( parsedUser.username );
    const isUserValid = userFromApi.password === parsedUser.password;
    if ( !isUserValid ) return false;

    return parsedUser;
} );

const initialState: {
    user: User | null;
    isLoggedIn: boolean;
    loading: boolean;
} = {
    user: null,
    isLoggedIn: false,
    loading: true,
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
    },

    extraReducers: builder =>
    {
        builder
            .addCase( isUserLoggedIn.fulfilled, ( state, action ) =>
            {
                if ( action.payload )
                {
                    state.user = action.payload;
                    state.isLoggedIn = true;
                }
                else
                {
                    state.user = null;
                    state.isLoggedIn = false;
                }

                state.loading = false;
            } )
            .addCase( isUserLoggedIn.rejected, ( state ) =>
            {
                state.loading = false;
            } );
    }
},
);

export const { setUser, setIsLoggedIn } = userSlice.actions;
export const userReducer = userSlice.reducer;