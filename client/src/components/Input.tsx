import { FieldValues } from 'react-hook-form';
import { useId } from 'react';
import { GenericInputProps } from '../types';
import ErrorMessage from './ErrorMessage';

function Input<T extends FieldValues>({
  label,
  showLabel,
  register,
  options,
  errors,
  type,
  placeholder,
}: GenericInputProps<T>) {
  const id = useId();

  return (
    <div className="flex flex-col">
      {showLabel && (
        <label className="mb-2" htmlFor={id}>
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </label>
      )}
      <input
        id={id}
        className={`${
          errors && 'border-red-500 ring-red-500 placeholder:text-red-400'
        } rounded-lg border bg-gray-50  p-2 outline-none ring-primary placeholder:first-letter:uppercase focus:ring-1`}
        placeholder={placeholder}
        type={type}
        {...register(label, options)}
      />
      {errors && <ErrorMessage message={errors.message} />}
    </div>
  );
}
export default Input;
