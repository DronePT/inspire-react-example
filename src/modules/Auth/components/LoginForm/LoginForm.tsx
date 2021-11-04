import { useForm } from 'react-hook-form';

import { Button, TextField } from '../../../../components';

interface LoginFormProps {
  onSubmit: (data: LoginFormFields) => void;
}

interface LoginFormFields {
  email: string;
  password: string;
}

export const LoginForm = ({ onSubmit }: LoginFormProps): JSX.Element => {
  const { register, handleSubmit, formState } = useForm<LoginFormFields>();

  return (
    <form action='' className='my-6' onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label='E-mail address'
        placeholder='your@email.com'
        register={register('email', {
          required: 'Este campo é obrigatório.',
          pattern: {
            value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i,
            message: 'Introduza um e-mail válido.',
          },
        })}
        error={formState.errors.email?.message}
      />
      <TextField
        label='Password'
        type='password'
        register={register('password', {
          required: 'Este campo é obrigatório',
          pattern: {
            value:
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g,
            message:
              'Password necessita 8 caracteres, uma letra maiúscula, minúscula, número e símbolos.',
          },
        })}
        error={formState.errors.password?.message}
      />
      <Button type='submit' label='Sign in!' />
    </form>
  );
};
