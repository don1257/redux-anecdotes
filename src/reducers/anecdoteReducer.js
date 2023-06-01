import { createSlice } from '@reduxjs/toolkit';
import AnecdoteService from "../services/anecdotes";
import anecdotesService from "../services/anecdotes";

const anecdotesSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    upVote: (state, action) => {
      const id  = action.payload;
      const updatedAnecdotes = state.map((anecdote) =>
          anecdote.id === id ? { ...anecdote, votes: anecdote.votes + 1 } : anecdote
      );
      return updatedAnecdotes;
    },
    addNewAnecdote: (state, action) => {
      return [...state, action.payload];
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdote(state, action) {
      return action.payload
    }
  },

});

export const initializeAnecdote = () => {
  return dispatch => {
    anecdotesService.getAll().then(notes => {
      console.log(notes)
      dispatch(setAnecdote(notes))
    })
  }
}

export const createAnecdote = (contentAnecdote) => {
  const newAnecdote = {
    content: contentAnecdote,
    id: Math.floor(10000 + Math.random() * 90000),
    votes: 0
  }

  return dispatch => {
    AnecdoteService.createNew(newAnecdote)
        .then((result) => dispatch(addNewAnecdote(result)));
  }
}

export const { upVote, addNewAnecdote, appendAnecdote, setAnecdote } = anecdotesSlice.actions;
export default anecdotesSlice.reducer;
