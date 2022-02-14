import  {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {GetPosts, SelectPostsIds} from "./PostSlice";
import PostsShow from "./PostsShow";
import {useEffect} from "react";
import {GetUsers} from "../Users/UserSlice";
import AddNew from "../AddNew/AddNew";


export default function PostMain ()
{

    const PostsIds = useSelector(SelectPostsIds)
    // console.log(PostsIds)
    const Status = useSelector(state => state.PostSlice.status)

    const dispatch = useDispatch()


    //start first dispatching for running thunk middleware
    useEffect(()=> {
        if (Status === 'idle') {
            dispatch(GetPosts())
            dispatch(GetUsers())
        }
    } , [dispatch , Status])


    let Renders ;
    if (Status === 'pending')
    {
        Renders = <h1>Loading ...</h1>
    }
    else
        if (Status === 'success')
        {
            Renders = PostsIds.map(Ids => <PostsShow key={Ids} PostIds={Ids}/>)
        }

    return (
        <>
            <AddNew/>
            {Renders}
        </>
    )
}