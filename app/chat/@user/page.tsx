import React from "react";
import SearchUser from "./_components/SearchUser";
import ListUser from "./_components/ListUser";
import { getFriendsWithLastMessage } from "@/lib/user.actions";
const userList = [
  {
    name: "Yasin",
    lastname: "Aktürk",
    fullName: "Yasin Aktürk",
    lastMessage:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    lastMessageDate: "2024-08-07T07:22:01.473Z",
  },
];
const commands = [
  { value: "calendar", label: "Calendar" },
  { value: "search-emoji", label: "Search Emoji" },
  { value: "calculator", label: "Calculator" },
];

export default async function page() {
  const response:any = await getFriendsWithLastMessage();
    if (response?.error) {
      console.log("response", response?.error);
    } else {
      console.log("Başarılı");
    }


  return (
    <>
      <SearchUser />
      <ListUser users={response} />
    </>
  );
}
