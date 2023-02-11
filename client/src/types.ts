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

export type User = {
  name: string;
  email: string;
  token: string;
};

export type UserState = {
  user: User | null;
};

export enum USER_ACTIONS {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

export type UserReducerAction = {
  type: USER_ACTIONS;
  payload?: any;
};

export type UserContextProps = {
  state: UserState;
  dispatch: React.Dispatch<UserReducerAction>;
};
