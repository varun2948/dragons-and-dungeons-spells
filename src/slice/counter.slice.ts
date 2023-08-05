import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { DnDState } from './IDnDSlice'


export const initialState: DnDState =
{
    spells: null,
    spellsLoading: false,
    spellsError: null,
    spellDetails: null,
    spellsDetailLoading: false,
    favoriteSpell: [],
}

export const DndSlice = createSlice({
    name: 'DnD',
    initialState: initialState,
    reducers: {
        clearSpellDetails: (state) => {
            state.spellDetails = null
        },
        setFavoriteSpell: (state, action) => {
            if (state.favoriteSpell?.find((spell) => spell.index === action.payload.index)) {
                state.favoriteSpell = state.favoriteSpell.filter((spell) => spell.index !== action.payload.index) || []
            } else {
                state.favoriteSpell = [...state.favoriteSpell, action.payload]
            }
        }
    },
    extraReducers(builder) {
        builder
            //FetchSpells
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

            //FetchSpellDetails
            .addCase(fetchSpellDetails.pending, (state, action) => {
                state.spellsDetailLoading = true
            })
            .addCase(fetchSpellDetails.fulfilled, (state, action) => {
                state.spellsDetailLoading = false
                state.spellDetails = action.payload
            })
            .addCase(fetchSpellDetails.rejected, (state, action) => {
                state.spellsDetailLoading = false
                state.spellsError = null
            })
    }
})

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get('https://www.dnd5eapi.co/api/spells')
    return response.data;
})
export const fetchSpellDetails = createAsyncThunk('spells/spellDetails', async (spellIndex: string) => {
    const response = await axios.get(`https://www.dnd5eapi.co/api/spells/${spellIndex}`)
    return response.data;
})

// Action creators are generated for each case reducer function
export const { clearSpellDetails, setFavoriteSpell } = DndSlice.actions

export default DndSlice.reducer