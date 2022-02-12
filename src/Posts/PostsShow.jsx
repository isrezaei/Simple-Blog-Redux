import {useSelector} from "react-redux";
import {SelectPostsByIds} from "./PostSlice";
import PostsTime from "./PostsTime";
import PostsName from "./PostsName";
import PostReaction from "./PostReaction";



export default function PostsShow({PostIds})
{
    const PostsItems = useSelector(state => SelectPostsByIds(state , PostIds))

    // console.log(PostsItems)


    const {content , date , reactions , title , usersId } = PostsItems





    return (
        <section className="posts-list">
            <h2>Posts</h2>

            <article className="post-excerpt">
                <h3>{title}</h3>
                <div>
                    <PostsName PostsUserIds={usersId}/>
                    <PostsTime date={date}/>
                </div>

                <p className="post-content">{content}</p>
                <PostReaction Reactions={reactions}/>


                {/*<a className="button muted-button" href="/posts/oE1ZviL86I8TznPnEPAy0" dideo-checked="true">View Post</a>*/}

            </article>


        </section>
    )
}