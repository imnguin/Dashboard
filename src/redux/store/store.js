import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from '../reducers/loadingSlice';

export const store = configureStore({
    reducer: {
        loading: loadingReducer,
    },
});