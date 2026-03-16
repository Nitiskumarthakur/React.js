import {configureStore} from '@reduxjs/toolkit'
import couterReducer from '../feature/couterSlice'
 


export const store = configureStore({
    reducer:{
        couter:couterReducer,
    }
})