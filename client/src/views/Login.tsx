import Input from '../components/Input';
import Button from '../components/Button';
import Form from '../components/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { LoginInputs } from '../types';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    console.log(data);
  };

  return (
    <Form title="Login" onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Email"
        label="email"
        type="email"
        register={register}
        options={{ required: true }}
        errors={errors.email}
      />

      <Input
        placeholder="Password"
        label="password"
        type="password"
        register={register}
        options={{ required: true }}
        errors={errors.password}
      />

      <Button type="submit" className="w-full">
        Login
      </Button>

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
