import moment from "moment";

export default function PostsTime ({date})
{
    return <strong> {moment(date).startOf('day').fromNow()}</strong>
}