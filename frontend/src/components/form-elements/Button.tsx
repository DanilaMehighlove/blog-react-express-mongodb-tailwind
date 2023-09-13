import { MouseEvent } from 'react';

interface IButton {
  text?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function Button({text, onClick}: IButton) {
  const hadleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
  }

  return (
    <button onClick={hadleClick} className="border-double border-4 border-green-800 rounded-md p-1 pr-5 pl-5">{text}</button>
  );
}