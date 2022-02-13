import {useSelector} from "react-redux";
import {SelectAllUsers} from "./UserSlice";
import UsersShow from "./UsersShow";
import {Link} from "react-router-dom";

export default function UsersMain ()
{
    const Users = useSelector(SelectAllUsers).map(Users => {
        return (
            <div  key={Users.id} >
                <Link to={`/users/${Users.id}`}>{Users.firstName}</Link>
            </div>
        )
    })

    return (
        <>
            {Users}
        </>
    )
}