import React from 'react'
import AppHeader from './_components/AppHeader';

const DashBoardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <AppHeader></AppHeader>
      {children}</div>
  )
}

export default DashBoardLayout