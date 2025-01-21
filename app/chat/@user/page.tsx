"use client"
import React, { useEffect } from "react";
import SearchUser from "./_components/SearchUser";
import ListUser from "./_components/ListUser";
import { friendsWithLastMessage } from '@/store/friendsSlice';
import { useAppDispatch, useAppSelector } from "@/lib/hookStore";
import { Skeleton } from "@/components/ui/skeleton";

export default function Page() {
  const dispatch = useAppDispatch();
  const friends = useAppSelector((state) => state.friends.friendsList);
  const status = useAppSelector((state) => state.friends.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(friendsWithLastMessage());
    }
  }, [status, dispatch]);

  return (
    <>
      <SearchUser />
      {status != 'succeeded' ? (
        <div className="flex flex-col space-y-4">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
      ) : (
        <ListUser users={friends} />
      )}
    </>
  );
}
