import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

interface Props {
    statu: boolean
}

const UserStatus = React.memo(({ statu }: Props) => (
  <div className="flex-none h-16 flex gap-4 pt-3 pl-2">
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="user" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <div className="flex flex-col">
      <span className="text-md font-semibold">Yasin Aktürk</span>
      <span className={`text-xs ${statu ? "text-slate-400" : "text-blue-500"}`}>
        {statu ? "offline" : "online"}
      </span>
    </div>
  </div>
));

export default UserStatus;
