export default function PostReaction ({Reactions})
{
    const Emojis = {
        eyes: '👀',
        heart: '❤',
        hooray: '🎉',
        rocket: '🚀',
        thumbsUp: '👍'
    }
    // console.log(Reactions)
   return Object.keys(Reactions).map(value => <button key={value} className="muted-button reaction-button">{Emojis[value]} {Reactions[value]}</button>)
}