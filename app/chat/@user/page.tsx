import React from "react";
import SearchUser from "./_components/SearchUser";
import ListUser from "./_components/ListUser";

const userList = [
  {
    fullName: "Yasin Aktürk",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Lorem Ipsum",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Ali Veli",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Yasin Aktürk",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Lorem Ipsum",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Ali Veli",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Yasin Aktürk",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Lorem Ipsum",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Ali Veli",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Yasin Aktürk",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Lorem Ipsum",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Ali Veli",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Yasin Aktürk",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Lorem Ipsum",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Ali Veli",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Yasin Aktürk",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Lorem Ipsum",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Ali Veli",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Yasin Aktürk",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Lorem Ipsum",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Ali Veli",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Yasin Aktürk",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Lorem Ipsum",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Ali Veli",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Yasin Aktürk",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Lorem Ipsum",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Ali Veli",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Yasin Aktürk",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Lorem Ipsum",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Ali Veli",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Yasin Aktürk",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Lorem Ipsum",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
  {
    fullName: "Ali Veli",
    message:
      "lorem ipsum is simply dummy text of the printing and typesetting industry.",
    avatar: "https://github.com/shadcn.png",
    time: "10:20",
  },
];
const commands = [
  { value: "calendar", label: "Calendar" },
  { value: "search-emoji", label: "Search Emoji" },
  { value: "calculator", label: "Calculator" },
];
export default function page() {
  return (
    <>
      <SearchUser />
      <ListUser users={userList} />
    </>
  );
}
