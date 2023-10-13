import { configureStore } from "@reduxjs/toolkit";

import {counterSlice} from './actions'

export default configureStore({
    reducer:{
        counter:counterSlice.reducer
    }
})