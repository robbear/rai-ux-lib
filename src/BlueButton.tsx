import React, { FC, ReactNode} from 'react';

interface BlueButtonProps {
  children: ReactNode;
}

const BlueButton: FC<BlueButtonProps> = ({ children }) => {
  return (
    <button style={{ backgroundColor: 'blue', color: 'white' }}>
      {children}
    </button>
  );
}

export default BlueButton;
