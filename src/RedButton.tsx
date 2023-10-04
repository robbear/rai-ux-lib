import React, { FC, ReactNode } from 'react';

interface RedButtonProps {
  children: ReactNode;
}

const RedButton: FC<RedButtonProps> = ({ children }) => {
  return (
    <button className="bg-red-500 text-white px-4 py-2 rounded">
      {children}
    </button>
  );
}
export default RedButton;
