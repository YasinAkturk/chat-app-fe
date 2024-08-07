"use client";

import { useEffect, useRef, useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import httpService from "@/services/axios";
import {
  ChatBubbleIcon,
  PersonIcon,
  GearIcon,
  CheckIcon,
  CaretSortIcon,
  LinkNone1Icon,
  LinkNone2Icon,
  PaperPlaneIcon,
  FaceIcon,
} from "@radix-ui/react-icons";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const;
const FormSchema = z.object({
  language: z.string({
    required_error: "Please select a language.",
  }),
});
async function getMe() {
  try {
    const response = await httpService.get("/me");
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
    return error;
  }
}
export default function Home() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("data", data);
  }
  function addEmoji(e: any) {
    console.log("e", e);
    const sym = e.unified.split("-");
    //@ts-ignore
    const codeArray = [];
    sym.forEach((el: any) => codeArray.push("0x" + el));
    //@ts-ignore
    let emoji = String.fromCodePoint(...codeArray);

    setMessage(message + emoji);
  }
  const messageList = [
    {
      message: "Buraya mesaj gelecek",
      incoming: false,
      outgoing: true,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: true,
      outgoing: false,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: true,
      outgoing: false,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: false,
      outgoing: true,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: false,
      outgoing: true,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: false,
      outgoing: true,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: true,
      outgoing: false,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: false,
      outgoing: true,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: false,
      outgoing: true,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: true,
      outgoing: false,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: false,
      outgoing: true,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: false,
      outgoing: true,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: true,
      outgoing: false,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: false,
      outgoing: true,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: false,
      outgoing: true,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: true,
      outgoing: false,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: true,
      outgoing: false,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: false,
      outgoing: true,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: false,
      outgoing: true,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: false,
      outgoing: true,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: true,
      outgoing: false,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: false,
      outgoing: true,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: false,
      outgoing: true,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: true,
      outgoing: false,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: false,
      outgoing: true,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: false,
      outgoing: true,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: true,
      outgoing: false,
    },
    {
      message: "Buraya mesaj gelecek",
      incoming: false,
      outgoing: true,
    },
  ];
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
  const navList = {
    top: [
      {
        name: "Chat",
        icon: <ChatBubbleIcon className="h-5 w-5" />,
        url: "/",
      },
      {
        name: "Users",
        icon: <PersonIcon className="h-5 w-5" />,
        url: "/",
      },
    ],
    bottom: [
      {
        name: "Settings",
        icon: <GearIcon className="h-5 w-5" />,
        url: "/",
      },
    ],
  };
  const [list, setList]: any = useState({});
  const [statu, setStatu]: any = useState(false);
  const [openEmoji, setOpenEmoji]: any = useState(false);
  const [message, setMessage]: any = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMe();
      setList(data);
    };

    fetchData();
  }, []);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    //@ts-ignore
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messagesEndRef]);

  return (
    <main className="flex">
      <TooltipProvider>
        <aside className="fixed inset-y-0 left-0 z-10 min-w-[60px] hidden w-14 flex-col border-r bg-background sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
            {navList.top.map((item, index) => {
              return (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.url}
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                    >
                      {item.icon}
                      <span className="sr-only">{item.name}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">{item.name}</TooltipContent>
                </Tooltip>
              );
            })}
          </nav>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
            {navList.bottom.map((item, index) => {
              return (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.url}
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                    >
                      {item.icon}
                      <span className="sr-only">{item.name}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">{item.name}</TooltipContent>
                </Tooltip>
              );
            })}
          </nav>
        </aside>
        <ResizablePanelGroup className="ml-[60px]" direction="horizontal">
          <ResizablePanel className="h-screen w-full min-w-[250px] max-w-[400px] px-3 py-5">
            <div className="flex flex-col gap-4">
              <span className="text-xl/7">Chat APP</span>
              <Form {...form}>
                <form className="space-y-6">
                  <FormField
                    control={form.control}
                    name="language"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                role="combobox"
                                className={cn(
                                  "h-[35px] justify-between",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value
                                  ? languages.find(
                                      (language) =>
                                        language.value === field.value
                                    )?.label
                                  : "Select Message"}
                                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-full p-0">
                            <Command>
                              <CommandInput
                                placeholder="Search..."
                                className="h-9"
                              />
                              <CommandList>
                                <CommandEmpty>No framework found.</CommandEmpty>
                                <CommandGroup>
                                  {languages.map((language) => (
                                    <CommandItem
                                      value={language.label}
                                      key={language.value}
                                      onSelect={() => {
                                        form.setValue(
                                          "language",
                                          language.value
                                        );
                                      }}
                                    >
                                      {language.label}
                                      <CheckIcon
                                        className={cn(
                                          "ml-auto h-4 w-4",
                                          language.value === field.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
              <div
                style={{ height: "calc(100vh - 130px)" }}
                className="overflow-x-hidden overflow-y-scroll no-scrollbar space-y-4"
              >
                {userList.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-start w-full gap-4 border-b border-slate-200 hover:border-slate-400 p-2 cursor-pointer"
                    >
                      <Avatar>
                        <AvatarImage src={item.avatar} alt="user" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="flex w-10/12 flex-col gap-1 pr-2">
                        <div className="flex gap-2 justify-between">
                          <span className="text-sm font-semibold">
                            {item.fullName}
                          </span>
                          <span className="text-xs pr-2">{item.time}</span>
                        </div>
                        <span className="text-xs  truncate">
                          {item.message}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel className="h-screen">
            <div className="flex flex-col h-screen ">
              <div className="flex-none h-16 flex gap-4 pt-3 pl-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="user" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-md font-semibold">Yasin Aktürk</span>
                  {!statu ? (
                    <span className="text-xs text-blue-500">online</span>
                  ) : (
                    <span className="text-xs text-slate-400">offline</span>
                  )}
                </div>
              </div>
              <div
                className="grow h-4/5 border-y py-3 px-4 bg-slate-100 scrollbar-thumb-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-transparent overflow-y-scroll overflow-x-hidden overflow-y-scroll flex flex-col gap-2"
                onClick={() => {
                  setOpenEmoji(false);
                }}
              >
                {messageList.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`flex ${
                        item.incoming ? "justify-start" : "justify-end"
                      }`}
                    >
                      <div
                        className={`${
                          item.incoming
                            ? "w-fit rounded-xl p-2 rounded-bl-none bg-white border"
                            : "w-fit rounded-xl p-2 rounded-br-none bg-blue-500 text-white border"
                        }`}
                      >
                        {item.message}
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>
              <div className="flex-none flex items-center gap-2 h-16 p-2">
                <LinkNone2Icon className="size-7 cursor-pointer" />
                <Input
                  type="email"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  placeholder="Email"
                  className="mr-2 focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
                />
                <PaperPlaneIcon className="size-5 -rotate-45 cursor-pointer" />
                <FaceIcon
                  className="size-6 mx-2 pt-1 cursor-pointer"
                  onClick={() => {
                    setOpenEmoji(!openEmoji);
                  }}
                />
                {openEmoji ? (
                  <span className="absolute bottom-20 right-6">
                    <Picker
                      previewPosition={"none"}
                      maxFrequentRows={1}
                      data={data}
                      emojiSize={20}
                      emojiButtonSize={30}
                      onEmojiSelect={addEmoji}
                    />
                  </span>
                ) : null}
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </TooltipProvider>
    </main>
  );
}
