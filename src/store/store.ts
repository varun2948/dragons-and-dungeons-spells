import { configureStore } from '@reduxjs/toolkit'
import spellsReducer from '../slice/counter.slice';
// ...

const store = configureStore({
  reducer: {
    spells: spellsReducer,
  },
})
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch