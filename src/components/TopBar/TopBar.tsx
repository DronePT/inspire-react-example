import logo from '../../assets/logo.svg';
import { useLogout } from '../../modules/Auth/hooks/use-logout.hook';
import { useStore } from '../../store';
interface TopBarProps {
  children?: React.ReactNode;
}

export const TopBar = (props: TopBarProps): JSX.Element | null => {
  const user = useStore((s) => s.user);
  const logout = useLogout();

  if (!user) return null;

  return (
    <div className='flex items-center justify-between h-20 px-4 bg-white shadow-sm'>
      <div className='logo'>
        <img src={logo} alt='Logo' className='h-10' />
      </div>
      <div className='flex items-center'>
        <div className='flex flex-col items-end'>
          <span className='text-md'>Hello,</span>
          <span className='flex items-center text-xl font-bold text-indigo-600'>
            <span>{user.name}</span>
            <span className='ml-1 text-base text-indigo-400'>
              &lt;{user.email}&gt;
            </span>
          </span>
        </div>
        <div className='flex items-center ml-4'>
          <button
            onClick={logout}
            className='text-gray-600 hover:text-indigo-500'
          >
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
