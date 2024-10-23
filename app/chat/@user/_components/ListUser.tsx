"use client";
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { Skeleton } from "@/components/ui/skeleton";

interface User {
  fullName: string;
  message: string;
  avatar: string;
  time: string;
}
export default function ListUser({ users }: { users: User[] }) {
  return (
    <div
      style={{ height: "calc(100vh - 130px)" }}
      className="overflow-x-hidden overflow-y-scroll no-scrollbar space-y-4"
    >
      <AutoSizer>
        {({ height, width }) => (
          <List
            style={{ overflow: "visible !important" }}
            height={height}
            itemData={users}
            itemCount={users.length}
            itemSize={10}
            layout="horizontal"
            width={width}
            useIsScrolling={true}
          >
            {({ index, isScrolling }: any) =>
              isScrolling ? (
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className="flex justify-start w-full gap-4 border-b border-slate-200 hover:border-slate-400 p-2 cursor-pointer"
                >
                  <Avatar>
                    <AvatarImage src={users[index].avatar} />
                    <AvatarFallback>YT</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex justify-between w-full">
                      <span>{users[index].fullName}</span>
                      <span className="text-xs">{users[index].time}</span>
                    </div>
                    <p className="text-muted-foreground text-xs line-clamp-1">
                      {users[index].message}
                    </p>
                  </div>
                </div>
              )
            }
          </List>
        )}
      </AutoSizer>

      {/* {users.map((item, index) => (
        <div
          key={index}
          className="flex justify-start w-full gap-4 border-b border-slate-200 hover:border-slate-400 p-2 cursor-pointer"
        >
          <Avatar>
            <AvatarImage src={item.avatar} />
            <AvatarFallback>YT</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between w-full">
              <span>{item.fullName}</span>
              <span className="text-xs">{item.time}</span>
            </div>
            <p className="text-muted-foreground text-xs line-clamp-1">
              {item.message}
            </p>
          </div>
        </div>
      ))} */}
    </div>
  );
}
