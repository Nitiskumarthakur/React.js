import { createSlice } from "@reduxjs/toolkit";
import { toast, Bounce } from 'react-toastify';

const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}
const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        addCollection: (state, action) => {
            const alreadyExists = state.items.find(
                item => item.id === action.payload.id
            );

            if (!alreadyExists) {
                state.items.push(action.payload);
                localStorage.setItem('collection', JSON.stringify(state.items))
                console.log('slice part');
            }
        },
        removeCollection: (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload
            )
            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        clearCollection: (state, action) => {
            state.items = [];
            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        //npm toast for pop up, when I collection item then sow popup.
        addToast: () => {
            toast.success('Added to Collection ✅', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
        },
        removeToast: () => {
            toast.error('Remove from collection', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }
})

export const { addCollection, removeCollection, clearCollection, addToast, removeToast } = collectionSlice.actions;
export default collectionSlice.reducer;