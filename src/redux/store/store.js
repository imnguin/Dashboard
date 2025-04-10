import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from '../reducers/loadingSlice';
import breadcrumbReducer from '../reducers/breadcrumbSlice'

export const store = configureStore({
    reducer: {
        loading: loadingReducer,
        breadcrumb: breadcrumbReducer
    },
});