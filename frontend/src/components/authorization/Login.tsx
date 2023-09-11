import { Input, Button } from '../form-elements';

export function Login() {

  return(
    <form className='flex flex-col h-full w-full justify-center items-center gap-y-4'>
      <Input />
      <Input />
      <Button text='Log in' />
    </form>
  );
}