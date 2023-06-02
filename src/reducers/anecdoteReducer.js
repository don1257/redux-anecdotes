import { createSlice } from '@reduxjs/toolkit';
import anecdotesService from "../services/anecdotes";

const anecdotesSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    upVote: (state, action) => {
      const payload  = action.payload;

      const updatedAnecdotes = state.map((anecdote) =>
          anecdote.id === payload.id ? { ...anecdote, votes: payload.votes } : anecdote
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
    anecdotesService.createNew(newAnecdote)
        .then((result) => dispatch(addNewAnecdote(result)));
  }
}

export const upVoteAnecdote = (id) => {
  return async dispatch => {
    let result = await anecdotesService.getOne(id)
    result.votes = result.votes += 1
    let updatedAnecdote = await anecdotesService.updateOne(id, result)
    dispatch(upVote(updatedAnecdote))
  }
}

export const { upVote, addNewAnecdote, appendAnecdote, setAnecdote } = anecdotesSlice.actions;
export default anecdotesSlice.reducer;
