import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFriendsWithLastMessage } from "@/lib/user.actions";

const initialState = {
  friendsList: [],
  status: 'idle',
  error: null
};

export const friendsWithLastMessage = createAsyncThunk(
  'friends/getFriendsWithLastMessage',
  async () => {
    const response = await getFriendsWithLastMessage();
    return response;
  }
);

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
   /* addFriend: (state, action) => {
      state.friendsList.push(action.payload);
    },
    removeFriend: (state, action) => {
      state.friendsList = state.friendsList.filter(friend => friend.id !== action.payload.id);
    }, */
  },
  extraReducers: (builder) => {
    builder
      .addCase(friendsWithLastMessage.pending, (state) => {
        console.log("loading friendsWithLastMessage");
        state.status = 'loading';
      })
      .addCase(friendsWithLastMessage.fulfilled, (state, action) => {
        console.log("succeeded friendsWithLastMessage");
        state.status = 'succeeded';
        state.friendsList = action.payload;
      })
      .addCase(friendsWithLastMessage.rejected, (state, action) => {
        console.log("failed friendsWithLastMessage");
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { addFriend, removeFriend } = friendsSlice.actions;

export default friendsSlice.reducer;
