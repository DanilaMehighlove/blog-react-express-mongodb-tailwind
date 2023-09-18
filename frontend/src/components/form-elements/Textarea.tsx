import { ChangeEvent } from 'react';

interface ITextarea {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export function Textarea({value, onChange}: ITextarea) {

  const hadleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(event);
  }

  return (
    <textarea
      value={value}
      onChange={hadleChange}
      className="border-double border-4 border-green-800 rounded-md"
    >
    </textarea>
  );
}