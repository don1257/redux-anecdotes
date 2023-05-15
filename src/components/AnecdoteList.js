import {upVote} from "../reducers/anecdoteReducer";
import {useDispatch, useSelector} from "react-redux";

const AnecdoteList = () => {

    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div>
    {anecdotes
        .sort( (a,b) => b.votes - a.votes)
        .map(anecdote =>
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => dispatch(upVote(anecdote.id))}>vote</button>
                </div>
            </div>
        )}
        </div>
    )
}

export default AnecdoteList
