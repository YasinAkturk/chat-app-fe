import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-xl/7">Chat APP</span>
      {children}
    </div>
  );
}
