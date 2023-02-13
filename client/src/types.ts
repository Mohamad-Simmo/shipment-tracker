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
  options?: RegisterOptions<T, Path<T>> | undefined;
  type?: 'text' | 'password' | 'email' | 'datetime-local';
  placeholder?: string;
  label: Path<T>;
  showLabel?: boolean;
  name?: string;
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

export type ShipmentInputs = {
  shipper_id: number;
  recipient_id: number;
  carrier_id: number;
  origin: string;
  destination: string;
  stops: string;
  method: 'sea' | 'air' | 'land';
  weight: number;
  shipping_date: Date;
  delivery_date: Date;
  instructions: string;
  description: string;
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

export type Customer = {
  id: number;
  contact_id: number;
  contact: Contact;
};

export type Carrier = {
  id: number;
  contact_id: number;
  logo: string;
  contact: Contact;
};

export type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
};

export type Route = {
  id: number;
  origin: string;
  destination: string;
  stop?: string;
  method: 'air' | 'land' | 'sea';
};

export type Waybill = {
  id: number;
  shipper_id: number;
  recipient_id: number;
  route_id: number;
  route: Route;
  shipper: Customer;
  recipient: Customer;
};

export type Shipment = {
  id: string;
  user_id: number;
  waybill_id: number;
  carrier_id: number;
  status: 'pending' | 'in transit' | 'delivered' | 'exception';
  weight: string;
  shipping_date: Date;
  delivery_date: Date;
  instructions?: string;
  description?: string;
  exception?: string;
  waybill: Waybill;
  carrier: Carrier;
};
