import logo from '../../logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import { removerUserID } from '../../store/features/userSlice';

export function Header() {
  const isAuthorized = useAppSelector((state: RootState) => !!state.user.ID);
  const dipatch = useAppDispatch();
  const navigate = useNavigate();

  const exit = () => {
    dipatch(removerUserID());
    navigate('/');
  }

  return(
    <div className="flex gap-x-4 w-full justify-between text-white">
      <Link className="flex items-end gap-x-2" to="/">
        <img className="w-10 h-10" src={logo} alt=''/>
        <h1 className="text-3xl font-medium">Nice BLOG</h1>
      </Link>
      <div className='flex gap-x-4 items-center'>
        {
          !isAuthorized ? 
          <>
            <div><Link to='/login'>Log In</Link></div>
            <div><Link to='/signin'>Sign In</Link></div>
          </> :
          <>
            <div><Link to='/article'>Write an article</Link></div>
            <button onClick={exit}>Exit</button>
          </>
        }
      </div>
    </div>
  );
}