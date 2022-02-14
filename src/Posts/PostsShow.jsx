import {useSelector} from "react-redux";
import {SelectPostsByIds} from "./PostSlice";
import PostsTime from "./PostsTime";
import PostsName from "./PostsName";
import PostReaction from "./PostReaction";
import {Link} from "react-router-dom";


export default function PostsShow({PostIds})
{
    const PostsItems = useSelector(state => SelectPostsByIds(state , PostIds))
    // console.log(PostsItems)

    const { id , content , date , reactions , title , usersId } = PostsItems

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
                <PostReaction Reactions={reactions} PostId={id}/>
                <Link className="button muted-button" to={`/posts/${PostIds}`} dideo-checked="true">View Post</Link>
            </article>
        </section>
    )
}