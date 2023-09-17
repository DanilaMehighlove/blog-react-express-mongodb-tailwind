import { useState, ChangeEvent, MouseEvent } from 'react';
import { Input, Button, Error } from '../form-elements';
import { handleMongoErrors } from '../../utils/handleErrors';
import { isUserExist } from '../../utils/requests';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginErrors, setLoginErrors] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
    if (loginErrors.length) setLoginErrors([]);
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (loginErrors.length) setLoginErrors([]);
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    let errors: string[] = [];
    event.preventDefault();

    if (login && password) {
      isUserExist(login, password)
      .then(response => response.json())
      .then(data => {
        errors = [...errors, ...handleMongoErrors(data)];

        if (!errors.length) {
          localStorage.setItem('userID', data['_id']);
          return navigate('/');
        }

        setLoginErrors([...errors]);
      });
    }

    if (!login) {
      errors = [...errors, 'The login cannot be empty'];
      setLoginErrors([...errors]);
    }

    if (!password) {
      errors = [...errors, 'The password cannot be empty'];
      setLoginErrors([...errors]);
    }
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