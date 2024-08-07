import React from "react";
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="shadow-[1px_1px_30px_-10px_rgba(0,0,0,0.4)] border-x-4 border-black rounded-lg h-auto w-[450px] px-8 py-8">
        {children}
      </div>
    </>
  );
}
