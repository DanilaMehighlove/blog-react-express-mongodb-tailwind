import { useState } from 'react';

export function Input() {
  const [value, setValue] = useState('');

  return (
    <input
      type="text"
      value={value}
      onChange={event => setValue(event.target.value)}
      className="border-double border-4 border-green-800 rounded-md"
    />
  );
}