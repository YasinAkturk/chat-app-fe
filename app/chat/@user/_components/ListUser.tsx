"use client";
import React, { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { Skeleton } from "@/components/ui/skeleton";
import { Virtuoso } from "react-virtuoso";

interface User {
  fullName?: string;
  lastMessage: string;
  avatar?: string;
  lastMessageDate: string;
  name: string;
  lastname: string;
}
{
  /* <div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>; */
}
export default function ListUser({ users }: { users: User[] }) {
  const [isScrolling, setIsScrolling] = useState(false);
  console.log("🚀 ~ ListUser ~ users:", users);
  return (
    <div
      style={{ height: "calc(100vh - 130px)" }}
      className="overflow-x-hidden overflow-y-scroll no-scrollbar space-y-4"
    >
      <Virtuoso
        style={{ height: "100%" }}
        totalCount={users.length}
        data={users}
        context={{ isScrolling }}
        isScrolling={setIsScrolling}
        itemContent={(index, user, { isScrolling }) => {
          return isScrolling ? (
            <div className="flex items-center space-x-4 h-[65px]">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between w-full pr-2">
                  <Skeleton className="h-3 w-36" />
                  <Skeleton className="h-3 w-8" />
                </div>
                <Skeleton className="w-full h-3 pr-2"></Skeleton>
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="flex justify-start w-full gap-4 border-b border-slate-200 hover:border-slate-400 p-2 cursor-pointer h-[65px]"
            >
              <Avatar>
                <AvatarImage src={user.avatar} />
                <AvatarFallback>
                  {user.avatar ||
                    `${user.name[0].toUpperCase()} ${user.lastname[0].toUpperCase()}`}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between w-full">
                  <span>
                    {user.fullName || `${user.name} ${user.lastname}`}
                  </span>
                  <span className="text-xs">
                    {new Date(user.lastMessageDate)
                      .toISOString()
                      .substring(11, 16)}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs line-clamp-1">
                  {user.lastMessage}
                </p>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}
