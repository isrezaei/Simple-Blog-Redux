import {createSlice , createAsyncThunk , createEntityAdapter} from "@reduxjs/toolkit";
import {Server} from "../Database/Server";
import LocalGetNewData from "../AddNew/LocalGetNewData";



export const GetPosts = createAsyncThunk('GetPosts' , ()=> {

   return Server().then(Response => Response.posts)
})

export const SendPost = createAsyncThunk('SendPost' , (Params)=> {

    return LocalGetNewData(Params).then(Response => Response.posts)

})


const PostsAdapter = createEntityAdapter({
    sortComparer : (a, b) => {}
})

const initialState = PostsAdapter.getInitialState({
    status : 'idle'
})

export const {

    selectIds : SelectPostsIds,
    selectAll : SelectAllPosts,
    selectById : SelectPostsByIds,

} = PostsAdapter.getSelectors(state => state.PostSlice)



const PostSlice = createSlice({
    name : 'Posts',
    initialState ,
    reducers : {},
    extraReducers : {
        [GetPosts.pending] : (state) =>{
            state.status  = 'pending'
        },
        [GetPosts.fulfilled] : (state , action) =>{
            state.status = 'success'
            PostsAdapter.upsertMany(state , action.payload)
            // console.log(action.payload)
        },
        [GetPosts.rejected] : (state , action) =>{

        },

        [SendPost.pending] : (state , action) => {
            state.status = 'idle'
        },
        [SendPost.fulfilled] : (state , action) => {
            state.status = 'success'
            PostsAdapter.addOne = action.payload

            console.log(action.payload)
        },
        [SendPost.rejected] : (state , action) => {
            // console.log(action)
        }
    }

})

export default PostSlice.reducer