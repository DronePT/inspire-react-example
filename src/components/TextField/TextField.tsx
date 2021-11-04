import { UseFormRegisterReturn } from 'react-hook-form';

interface TextFieldProps {
  label: string;
  id?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'number' | 'email';
  error?: string;
  register: UseFormRegisterReturn;
}

export const TextField = ({
  id,
  register,
  label,
  placeholder,
  type = 'text',
  error,
}: TextFieldProps): JSX.Element => (
  <div className='mb-6'>
    <label
      htmlFor={id || register.name}
      className='block mb-1 ml-2 text-sm text-gray-700'
    >
      {label}
    </label>
    <input
      type={type}
      id={id || register.name}
      placeholder={placeholder}
      {...register}
      className='w-full px-4 py-2 placeholder-gray-500 border border-gray-200 rounded-md outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 focus:text-indigo-600'
    />
    {error && (
      <span className='block mt-1 ml-2 text-sm text-red-500'>{error}</span>
    )}
  </div>
);
