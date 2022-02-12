import {useState} from "react";
import {useDispatch} from "react-redux";
import {SendPost} from "../Posts/PostSlice";

export default function AddNew ()
{

    const [Title , SetTitle] = useState('')
    const [Author , SetAuthor] = useState('')
    const [Content , SetContent] = useState('')
    const dispatch = useDispatch()


    const HandelSendPost = () => {

         dispatch(SendPost({Title , Author , Content}))

        SetTitle('')
        SetAuthor('')
        SetContent('')

    }




    return (
        <section>
            <h2>Add a New Post</h2>
            <form>

                <label htmlFor="postTitle">Post Title:</label>
                <input value={Title} onChange={event => SetTitle(event.target.value)} type="text" id="postTitle" name="postTitle" placeholder="What's on your mind?"/>

                <label htmlFor="postAuthor">Author:</label>
                <input value={Author} onChange={event => SetAuthor(event.target.value)} id="postAuthor"/>

                <label htmlFor="postContent">Content:</label>
                <textarea value={Content} onChange={event => SetContent(event.target.value)} id="postContent" name="postContent"> </textarea>

                <button onClick={HandelSendPost} type="button">Save Post</button>

            </form>
        </section>
    )
}