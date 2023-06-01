import { createSlice } from '@reduxjs/toolkit';
import AnecdoteService from "../services/anecdotes";

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
      const newAnecdote = {
        content: action.payload,
        id: Math.floor(10000 + Math.random() * 90000),
        votes: 0
      }
      AnecdoteService.createNew(newAnecdote)
          .then(() => {return [...state, newAnecdote]});
      return [...state];
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdote(state, action) {
      return action.payload
    }
  },

});

export const { upVote, addNewAnecdote, appendAnecdote, setAnecdote } = anecdotesSlice.actions;
export default anecdotesSlice.reducer;
