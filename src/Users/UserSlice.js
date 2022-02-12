import {createSlice ,createAsyncThunk , createEntityAdapter} from "@reduxjs/toolkit";
import {Server} from "../Database/Server";



export const GetUsers = createAsyncThunk('GetUsers' , ()=> {
    return Server().then(Response => Response.users)
})

const UserAdapter = createEntityAdapter()

const initialState = UserAdapter.getInitialState({
    status : 'idle'
})

export const {

    selectIds : SelectUsersIds,
    selectAll : SelectAllUsers,
    selectById : SelectUsersByIds,

} = UserAdapter.getSelectors(state => state.UsersSlice)




const UsersSlice = createSlice({
    name : 'Users',
    initialState ,
    reducers : {} ,
    extraReducers : {

        [GetUsers.pending] : (state , action) =>
        {
            state.status = 'Pending'
        },
        [GetUsers.fulfilled] : (state , action) =>
        {
            state.status = 'Success'
            UserAdapter.upsertMany(state , action.payload)
        },
        [GetUsers.rejected] : (state , action) =>
        {

        }
    }
})

export default UsersSlice.reducer