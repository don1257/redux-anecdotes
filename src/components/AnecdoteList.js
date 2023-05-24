import {upVote} from "../reducers/anecdoteReducer";
import {useDispatch, useSelector} from "react-redux";
import {setNotificationID} from "../reducers/notificationReducer";

const AnecdoteList = () => {

    const anecdotes = useSelector(state => {
        if ( state.filter !== 'ALL'){
            return state.anecdote.filter(anecdote => anecdote.content.includes(state.filter))
        }
        else{
            return state.anecdote
        }
    })

    const dispatch = useDispatch()

    const handleVote = (id) => {
        dispatch(upVote(id));
        dispatch(setNotificationID(id))
    };

    return (
        <div>
    {anecdotes
        .slice()
        .sort( (a,b) => b.votes - a.votes)
        .map(anecdote =>
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => handleVote(anecdote.id)}>vote</button>
                </div>
            </div>
        )}
        </div>
    )
}

export default AnecdoteList
