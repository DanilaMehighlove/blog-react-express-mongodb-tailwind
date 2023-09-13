import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

interface IInput {
  type?: HTMLInputTypeAttribute
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({type, value, onChange}: IInput) {

  const hadleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
  }

  return (
    <input
      type={type ?? 'text'}
      value={value}
      onChange={hadleChange}
      className="border-double border-4 border-green-800 rounded-md"
    />
  );
}