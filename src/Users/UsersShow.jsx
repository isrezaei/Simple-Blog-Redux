import {Link, useParams} from "react-router-dom";
import {ShowPostsForEachUsers} from "../Posts/PostSlice";
import {useSelector} from "react-redux";

export default function UsersShow ()
{
    const {UsersIds} = useParams()

    // Get user ids from usePrams and send to postSlice in createSelector and  doing comparison between
    // (users.id & posts.userId) ; next step doing filter for those than have same ids
    // Get the new date from createSelector and doing loops On them

    const SelectPostOfUsers = useSelector(state => ShowPostsForEachUsers(state , UsersIds))
    // console.log(SelectPostOfUsers)

    const UserPosts = SelectPostOfUsers.map(Posts => {
        return (
            <div key={Posts.id}>
                 <Link key={Posts.id} to={`/posts/${Posts.id}`}> {Posts.title}</Link>
            </div>
        )
    })

    return (
        <div>
            {UserPosts}
        </div>
    )
}