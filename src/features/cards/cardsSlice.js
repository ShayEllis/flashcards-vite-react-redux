import { createSlice } from '@reduxjs/toolkit'

const initialState = { cards: {} }

const cardsSlice = createSlice({
    name: 'cards',
    initialState: initialState,
    reducers: {
        addCard: (state, { payload }) => { state.cards[payload.id] = payload }
    }
})

export const selectCards = (state) => state.cards.cards
export const { addCard } = cardsSlice.actions
export default cardsSlice.reducer