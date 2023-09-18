import { MouseEvent, useState, ChangeEvent } from 'react';
import { Button, Input, Error } from "../form-elements";
import { handleMongoErrors } from '../../utils/handleErrors';
import { createUser } from '../../utils/requests';
import { useNavigate } from 'react-router-dom';
import { setUserID } from '../../store/features/userSlice';
import { useAppDispatch } from '../../store/hooks';

export function Signin() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [signinErrors, setSigninErrors] = useState<string[]>([]);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
    if (signinErrors.length) setSigninErrors([]);
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (signinErrors.length) setSigninErrors([]);
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    let errors: string[] = [];
    event.preventDefault();

    createUser(login, password)
    .then(response => response.json())
    .then(data => {
      errors = [...errors, ...handleMongoErrors(data)];

      if (!errors.length) {
        dispatch(setUserID(data['_id']));
        return navigate('/');
      }

      setSigninErrors(errors);
    });

    if (!login) {
      errors = [...errors, 'The login cannot be empty'];
      setSigninErrors([...errors]);
    }

    if (!password) {
      errors = [...errors, 'The password cannot be empty'];
      setSigninErrors([...errors]);
    }
  }

  return(
    <form className='flex flex-col h-full w-full justify-center items-center gap-y-4'>
      <Input value={login} onChange={handleLoginChange} />
      <Input value={password} onChange={handlePasswordChange} />
      <Button text='Sign in' onClick={handleClick} />
      <Error errors={signinErrors} />
    </form>
  );
}