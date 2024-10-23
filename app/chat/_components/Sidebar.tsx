// components/Sidebar.tsx

import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { ChatBubbleIcon, GearIcon, PersonIcon } from "@radix-ui/react-icons";
import Link from "next/link";
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
const Sidebar = () => (
  <TooltipProvider delayDuration={0}>
    <aside className="h-screen hidden flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
        {navList.top.map((item, index) => (
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
        ))}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
        {navList.bottom.map((item, index) => (
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
        ))}
      </nav>
    </aside>
  </TooltipProvider>
);

export default Sidebar;
