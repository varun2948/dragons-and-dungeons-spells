import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import DndReducer from '../slice/counter.slice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
  dnd: DndReducer,
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = configureStore({
  reducer: persistedReducer, middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})
let persistor = persistStore(store)
// eslint-disable-next-line import/no-anonymous-default-export
export { store, persistor };
