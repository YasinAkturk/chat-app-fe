import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Sidebar from "./_components/Sidebar";
export default function Layout({
  user,
  message
}: {
  user: React.ReactNode;
  message: React.ReactNode;
}) {
  return (
    <main className="flex">
      <div className="w-[60px]">
      <Sidebar />
      </div>
      <div className="w-[450px]"><div className="h-screen p-4">{user}</div></div>
      <div className="w-full"><div className="h-screen">{message}</div></div>
      {/* <ResizablePanelGroup
        className="w-full h-screen items-stretch"
        direction="horizontal"
      >
        <ResizablePanel defaultSize={3} minSize={3} maxSize={3}>
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle disabled={true} />
        <ResizablePanel minSize={15} maxSize={30} defaultSize={20}>
          <div className="h-screen p-4">{user}</div>
        </ResizablePanel>
        <ResizableHandle disabled={true} />
        <ResizablePanel defaultSize={77}>
          <div className="h-screen">{message}</div>
        </ResizablePanel>
      </ResizablePanelGroup> */}
    </main>
  );
}
