interface ButtonProps {
  type?: 'button' | 'reset' | 'submit';
  label?: string;
  children?: React.ReactNode;
}

export const Button = ({
  type = 'button',
  label,
  children,
}: ButtonProps): JSX.Element => (
  <button
    type={type}
    className='w-full py-4 text-white bg-indigo-500 rounded-md outline-none focus:bg-indigo-600 focus:ring focus:ring-indigo-100'
  >
    {label || children}
  </button>
);
