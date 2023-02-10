import {
  Path,
  UseFormRegister,
  FieldValues,
  FieldError,
  RegisterOptions,
} from 'react-hook-form';

export type GenericInputProps<T extends FieldValues> = {
  errors?: FieldError;
  register: UseFormRegister<T>;
  options: RegisterOptions<T, Path<T>> | undefined;
  type: 'text' | 'password' | 'email';
  placeholder?: string;
  label: Path<T>;
  showLabel?: boolean;
};

export type LoginInputs = {
  email: string;
  password: string;
};

export type RegisterInputs = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export type FormProps = {
  children?: React.ReactNode;
  title?: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};
