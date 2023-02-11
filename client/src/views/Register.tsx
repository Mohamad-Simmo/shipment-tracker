import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Form from '../components/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegisterInputs } from '../types';
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/ContextProvider';
import { USER_ACTIONS } from '../types';
import { registerUser } from '../api';
import ErrorMessage from '../components/ErrorMessage';

function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const { dispatch } = useUserContext();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    registerUser(data)
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
    <Form title="Sign Up" onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Name"
        label="name"
        type="text"
        register={register}
        options={{ required: 'Name is required' }}
        errors={errors.name}
      />

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
        options={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters',
          },
        }}
        errors={errors.password}
      />

      <Input
        placeholder="Confirm Password"
        label="password_confirmation"
        type="password"
        register={register}
        options={{
          required: 'Please confirm your password',
          validate: (value) => {
            if (value !== watch('password')) return 'Passwords do not match';
          },
        }}
        errors={errors.password_confirmation}
      />

      <Button type="submit" className="w-full" disabled={isLoading}>
        Sign Up
      </Button>

      {isError && <ErrorMessage message={message} />}

      <p className="text-sm tracking-wide">
        Already have an account?{' '}
        <Link
          to="/auth/login"
          className="font-semibold text-blue-600 underline"
        >
          Login
        </Link>
      </p>
    </Form>
  );
}
export default Register;
