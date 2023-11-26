import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import userApi from "./features/api/userApi";

const store=configureStore({
    reducer:{
        userSlice:userSlice,
        [userApi.reducerPath]: userApi.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
})
export default store;