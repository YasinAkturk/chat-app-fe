import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { friendsWithLastMessage } from '@/store/friendsSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const friends = useSelector((state) => state.friends.friendsList);
  const status = useSelector((state) => state.friends.status);
  const error = useSelector((state) => state.friends.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(friendsWithLastMessage());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Friends</h1>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>{friend.name}: {friend.lastMessage}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
