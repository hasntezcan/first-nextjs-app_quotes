import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Quote {
  quote: string
  author: string
}
interface QuoteState { localQuotes: Quote[] }

const initialState: QuoteState = { localQuotes: [] }

const quoteSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    addQuote(state, action: PayloadAction<Quote>) {
      state.localQuotes.push(action.payload)
    },
    removeQuote(state, action: PayloadAction<number>) {
      state.localQuotes = state.localQuotes.filter((_, i) => i !== action.payload)
    },
  },
})

export const { addQuote, removeQuote } = quoteSlice.actions
export default quoteSlice.reducer