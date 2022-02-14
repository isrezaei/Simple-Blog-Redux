import {createSlice, createAsyncThunk, createEntityAdapter, createSelector} from "@reduxjs/toolkit";
import {Server} from "../Database/Server";
import LocalGetNewData from "../AddNew/LocalGetNewData";

export const GetPosts = createAsyncThunk('GetPosts' , ()=> {
   return Server().then(Response => Response.posts)
})

export const SendPost = createAsyncThunk('SendPost' , (Params)=> {
    return LocalGetNewData(Params).then(Response => Response.posts)
})

const PostsAdapter = createEntityAdapter()

const initialState = PostsAdapter.getInitialState({
    status : 'idle'
})

export const {
    selectIds : SelectPostsIds,
    selectAll : SelectAllPosts,
    selectById : SelectPostsByIds,
} = PostsAdapter.getSelectors(state => state.PostSlice)


//Filter for render posts than , that user ids same id of users Slices
export const ShowPostsForEachUsers = createSelector (
    [SelectAllPosts , (state , UserIds)=> UserIds] ,

    (AllPosts , UsersIds)=>{
        return AllPosts.filter(posts => posts.usersId === UsersIds)
    }
)


const PostSlice = createSlice({
    name : 'Posts',
    initialState ,
    reducers : {
        IncreaseReaction(state , action)
        {
            const {KeyEachReactions , PostId} = action.payload
            state.entities[PostId].reactions[KeyEachReactions] += 1
            // console.log(action.payload)
        }
    },
    extraReducers : {
        [GetPosts.pending] : (state) =>{
            state.status  = 'pending'
        },
        [GetPosts.fulfilled] : (state , action) =>{
            state.status = 'success'
            PostsAdapter.upsertMany(state , action.payload)
            // console.log(action.payload)
        },
        [SendPost.pending] : (state) => {
            state.status = 'idle'
        },
        [SendPost.fulfilled] : (state , action) => {
            state.status = 'success'
            PostsAdapter.addOne = action.payload
        },
    }
})

export default PostSlice.reducer
export const {IncreaseReaction} = PostSlice.actions