import { createSlice } from '@reduxjs/toolkit';

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
    newAnecdote: (state, action) => {
      const newAnecdote = action.payload;
      return [...state, newAnecdote];
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdote(state, action) {
      return action.payload
    }
  },

});

export const { upVote, newAnecdote, appendAnecdote, setAnecdote } = anecdotesSlice.actions;
export default anecdotesSlice.reducer;
