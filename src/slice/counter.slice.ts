import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const spellsSlice = createSlice({
    name: 'spells',
    initialState: {
        spells: {},
        spellsLoading: false,
        spellsError: null
    },
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.spellsLoading = true
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.spellsLoading = false
                // Add any fetched posts to the array
                state.spells = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.spellsLoading = false
                state.spellsError = null
            })
    }
})

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get('https://www.dnd5eapi.co/api/spells')
    return response.data;
})

// Action creators are generated for each case reducer function
export const { } = spellsSlice.actions

export default spellsSlice.reducer