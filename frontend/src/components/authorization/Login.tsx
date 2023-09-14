import { useState, ChangeEvent, MouseEvent } from 'react';
import { Input, Button, Error } from '../form-elements';
import { handleMongoErrors } from '../../utils/handleErrors';

export function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginErrors, setLoginErrors] = useState<string[]>([]);

  const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
    if (loginErrors.length) setLoginErrors([]);
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (loginErrors.length) setLoginErrors([]);
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    fetch(`http://localhost:3030/user/isexist/${login}/${password}`)
    .then(response => response.json())
    .then(data => {
      console.log({data});

      setLoginErrors(handleMongoErrors(data));
    });
  }

  return(
    <form className='flex flex-col h-full w-full justify-center items-center gap-y-4'>
      <Input value={login} onChange={handleLoginChange} />
      <Input value={password} onChange={handlePasswordChange} />
      <Button text='Log in' onClick={handleClick} />
      <Error errors={loginErrors} />
    </form>
  );
}