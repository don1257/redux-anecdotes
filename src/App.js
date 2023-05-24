import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import anecdotesService from './services/anecdotes'
import {setAnecdote} from "./reducers/anecdoteReducer";

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        anecdotesService.getAll().then(notes => {
            console.log(notes)
            dispatch(setAnecdote(notes))
        })
    }, [dispatch])

    return (
    <div>
      <h2>Anecdotes</h2>
      <Notification></Notification>
      <Filter></Filter>
      <AnecdoteList></AnecdoteList>
      <AnecdoteForm></AnecdoteForm>
    </div>
  )
}

export default App
