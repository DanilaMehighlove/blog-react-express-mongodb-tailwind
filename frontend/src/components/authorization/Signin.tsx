import { MouseEvent, useState, ChangeEvent } from 'react';
import { Button, Input } from "../form-elements";

export function Signin() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    fetch('http://localhost:3030/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({login, password})
    })
    .then(response => response.json())
    .then(data => console.log({data}));
  }

  return(
    <form className='flex flex-col h-full w-full justify-center items-center gap-y-4'>
      <Input value={login} onChange={handleLoginChange} />
      <Input value={password} onChange={handlePasswordChange} />
      <Button text='Sign in' onClick={handleClick} />
    </form>
  );
}