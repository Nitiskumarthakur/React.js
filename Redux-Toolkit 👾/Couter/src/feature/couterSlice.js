import {createSlice} from '@reduxjs/toolkit'

export const couterSlice = createSlice(({
    name:"Couter",
    initialState : {
        value:0,
    },
    reducers:{
        increment : (state)=>{
            state.value +=1;
        },
        decement:(state)=>{
            state.value -=1;
        },
        incrementByNumber:(state, action)=>{
            state.value += action.payload;
        }
    }
}))

export const {increment, decement, incrementByNumber} = couterSlice.actions;

export default couterSlice.reducer