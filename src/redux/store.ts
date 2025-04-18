import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';


const store = configureStore( {
    reducer: {
        user: userReducer,
    }
} );

export default store;

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;