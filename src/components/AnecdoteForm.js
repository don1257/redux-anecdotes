import {useState} from "react";
import {useDispatch} from "react-redux";
import {appendAnecdote, addNewAnecdote, createAnecdote} from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {

    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({})

    const formSubmit = (event) => {
        event.preventDefault()
        dispatch(createAnecdote(inputs.createNew))
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    return (
        <div>
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

export default AnecdoteForm
