import { LoginForm } from '../../components';
import { useLogin } from '../../hooks';

export const LoginPage = (): JSX.Element => {
  const login = useLogin();

  return (
    <div className='flex items-center min-h-screen'>
      <div className='container mx-auto'>
        <div className='max-w-md p-4 mx-auto bg-white rounded-lg shadow-md'>
          <h1 className='py-6 text-3xl text-center text-indigo-500'>Sign in</h1>
          <LoginForm onSubmit={(data) => login(data.email, data.password)} />
        </div>
      </div>
    </div>
  );
};
