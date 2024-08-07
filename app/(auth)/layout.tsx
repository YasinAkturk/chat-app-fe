import React from 'react';
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("process.env.NEXT_PUBLIC_NODE_ENV", process.env.NEXT_PUBLIC_NODE_ENV);
  return (
    <>
        <div className='w-full h-screen flex justify-center items-center'>
            {children}
        </div>
    </>
  );
}