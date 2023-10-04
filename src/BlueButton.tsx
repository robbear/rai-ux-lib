import React, { FC, ReactNode} from 'react';

interface BlueButtonProps {
  children: ReactNode;
}

const BlueButton: FC<BlueButtonProps> = ({ children }) => {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded">
      {children}
    </button>
  );
}

export default BlueButton;
