import Input from '../components/Input';
import Button from '../components/Button';
import Form from '../components/Form';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { LoginInputs, USER_ACTIONS } from '../types';
import { loginUser } from '../api';
import { useUserContext } from '../context/ContextProvider';
import ErrorMessage from '../components/ErrorMessage';

function Login() {
  const { dispatch } = useUserContext();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    loginUser(data)
      .then((response) => {
        dispatch({
          type: USER_ACTIONS.LOGIN,
          payload: response.data,
        });
      })
      .catch((err) => {
        setIsError(true);
        setMessage(err.response?.data?.message || err.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Form title="Login" onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Email"
        label="email"
        type="email"
        register={register}
        options={{
          required: 'Email is required',
          pattern: {
            message: 'Invalid email',
            value:
              // eslint-disable-next-line no-control-regex
              /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
          },
        }}
        errors={errors.email}
      />

      <Input
        placeholder="Password"
        label="password"
        type="password"
        register={register}
        options={{ required: 'Password is required' }}
        errors={errors.password}
      />

      <Button disabled={isLoading} type="submit" className="w-full">
        Login
      </Button>

      {isError && <ErrorMessage message={message} />}

      <p className="text-sm tracking-wide">
        Don't have an account?{' '}
        <Link
          to="/auth/register"
          className="font-semibold text-blue-600 underline"
        >
          Sign up
        </Link>
      </p>
    </Form>
  );
}
export default Login;
