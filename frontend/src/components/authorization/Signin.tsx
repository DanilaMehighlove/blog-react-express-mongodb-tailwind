import { Button, Input } from "../form-elements";

export function Signin() {

  return(
    <form className='flex flex-col h-full w-full justify-center items-center gap-y-4'>
      <Input />
      <Input />
      <Button text='Sign in' />
    </form>
  );
}