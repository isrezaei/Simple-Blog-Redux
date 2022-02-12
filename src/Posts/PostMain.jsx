import  {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {GetPosts, SelectPostsIds} from "./PostSlice";
import PostsShow from "./PostsShow";
import {useEffect} from "react";
import {GetUsers} from "../Users/UserSlice";


export default function PostMain ()
{

    const PostsIds = useSelector(SelectPostsIds)

    const Status = useSelector(state => state.PostSlice.status)


    const dispatch = useDispatch()
    // console.log(PostsIds)


    console.log(Status)



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
            {Renders}
        </>
    )
}