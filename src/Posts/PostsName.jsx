import {useSelector} from "react-redux";
import {SelectUsersByIds} from "../Users/UserSlice";

export default function PostsName ({PostsUserIds})
{
    const UserStatus = useSelector(state => state.UsersSlice.status)
    const NameUsers = useSelector(state => UserStatus === 'Success' && SelectUsersByIds(state , PostsUserIds))

    // console.log(NameUsers.firstName)

    const {firstName , lastName} = NameUsers

    return <span> {firstName} {lastName} </span>
}