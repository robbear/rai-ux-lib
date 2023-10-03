import React, { FC, ReactNode } from 'react';

interface RedButtonProps {
  children: ReactNode;
}

const RedButton: FC<RedButtonProps> = ({ children }) => {
  return (
    <button style={{ backgroundColor: 'red', color: 'white' }}>
      {children}
    </button>
  );
}
export default RedButton;
