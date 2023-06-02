import {createSlice} from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: false,
    reducers: {
        setNotificationID: (state, action) =>{
            const id  = action.payload;
            return id;
        },
        setNotification: (state, action) =>{
            const notificationObject  = action.payload;
            return notificationObject;
        }
    }
})

export const { setNotificationID, setNotification } = notificationSlice.actions;
export default notificationSlice.reducer
