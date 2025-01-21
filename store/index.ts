import { configureStore } from '@reduxjs/toolkit';
import friendsReducer from './friendsSlice';

const store = configureStore({
  reducer: {
    friends: friendsReducer,
    // ...other reducers...
  },
});

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export default store;
