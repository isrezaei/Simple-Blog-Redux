import {IncreaseReaction} from "./PostSlice";
import {useDispatch} from "react-redux";

export default function PostReaction ({Reactions , PostId})
{
    const Emojis = {
        eyes: '👀',
        heart: '❤',
        hooray: '🎉',
        rocket: '🚀',
        thumbsUp: '👍'
    }
    // console.log(Reactions)

    const dispatch = useDispatch()


    const HandelIncreaseReaction = (KeyEachReactions) => {
        dispatch(IncreaseReaction({KeyEachReactions , PostId}))
    }




   return Object.keys(Reactions).map(KeyEachReactions => {
      return (
          <button
              key={KeyEachReactions}
              onClick={()=>HandelIncreaseReaction(KeyEachReactions)}
              className="muted-button reaction-button"> {Emojis[KeyEachReactions]} {Reactions[KeyEachReactions]} </button>
      )
   })
}