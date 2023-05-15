import { useSelector, useDispatch } from 'react-redux'
import {newAnecdote, upVote} from "./reducers/anecdoteReducer";
import {useState} from "react";

const App = () => {

  const [inputs, setInputs] = useState({})

  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const formSubmit = (event) => {
      event.preventDefault()
      dispatch(newAnecdote(inputs.createNew))
  }

  const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

  return (
    <div>
      <h2>Anecdotes</h2>
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
      <h2>create new</h2>
      <form onSubmit={formSubmit}>
        <div>
            <input
                onChange={handleChange}
                name='createNew'
            />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App
