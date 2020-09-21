import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  appData: [
    {
      id: 'quolieWaiNgaimapeobaaphoogeiloin',
      name: 'Deck 1',
      cards: [{ question: 'Q1', answer: 'A1' }],
    },
    {
      id: 'eisohzeiwizuinaushaecaiGhauTogef',
      name: 'Deck #2',
      cards: [
        { question: 'Q2.1', answer: 'A2.1' },
        { question: 'Q2.2', answer: 'A2.2' },
      ],
    },
    {
      id: 'chieQuieShookieheiciemoopoahaigu',
      name: 'Deckson #3',
      cards: [{ question: 'Q3', answer: 'A3' }],
    },
  ],
  scoreTimestamp : 0
};

const decksSlice = createSlice({
  name: 'decks',
  initialState,
  reducers: {
    deckAdded: {
      reducer(state, action) {
        state.appData.push(action.payload);
      },
      prepare(name) {
        return {
          payload: {
            id: nanoid(),
            name,
            cards: [],
          },
        };
      },
    },
    deckDeleted(state, action) {
        return {appData : state.appData.filter((item) => item.id !== action.payload)};
    },
    cardAdded: {
      reducer(state, action) {
        const { question, answer, id } = action.payload;
        state.appData
          .filter((item) => item.id === id)[0]
          .cards.push({ question, answer });
      },
      prepare(question, answer, id) {
        return {
          payload: {
            question,
            answer,
            id,
          },
        };
      },
    },
    scoreTimestampUpdated(state, action) {
        state.scoreTimestamp = action.payload;
        console.log(state);
    },
  },
});

export const { deckAdded, deckDeleted, cardAdded, scoreTimestampUpdated } = decksSlice.actions;

export default decksSlice.reducer;
