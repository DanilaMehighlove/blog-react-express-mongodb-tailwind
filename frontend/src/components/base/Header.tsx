import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

export function Header() {
  console.log(localStorage.getItem('userID'));
  return(
    <div className="flex gap-x-4 w-full justify-between text-white">
      <Link className="flex items-end gap-x-2" to="/">
        <img className="w-10 h-10" src={logo}/>
        <h1 className="text-3xl font-medium">Nice BLOG</h1>
      </Link>
      <div className='flex gap-x-4 items-center'>
        <div><Link to='/login'>Log In</Link></div>
        <div><Link to='/signin'>Sign In</Link></div>
      </div>
    </div>
  );
}