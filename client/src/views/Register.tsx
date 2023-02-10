import Input from '../components/Input';
import Button from '../components/Button';
import Form from '../components/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegisterInputs } from '../types';
import { Link } from 'react-router-dom';

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    console.log(data);
  };

  return (
    <Form title="Sign Up" onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Name"
        label="name"
        type="text"
        register={register}
        options={{ required: true }}
        errors={errors.name}
      />

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

      <Input
        placeholder="Confirm Password"
        label="password_confirmation"
        type="password"
        register={register}
        options={{ required: true }}
        errors={errors.password_confirmation}
      />

      <Button type="submit" className="w-full">
        Sign Up
      </Button>

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
