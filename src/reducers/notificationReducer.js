import {createSlice} from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: false,
    reducers: {
        setNotificationID: (state, action) =>{
            const id  = action.payload;
            return id;
        }
    }
})

export const { setNotificationID } = notificationSlice.actions;
export default notificationSlice.reducer
