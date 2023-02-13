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
  type = 'text',
  placeholder,
  className,
  name,
}: GenericInputProps<T> & { className?: string }) {
  const id = useId();

  return (
    <div className={className}>
      {showLabel && (
        <label
          className={
            options?.required
              ? "after:font-semibold after:text-red-500 after:content-['*']"
              : undefined
          }
          htmlFor={id}
        >
          {name ? name : label.charAt(0).toUpperCase() + label.slice(1)}
        </label>
      )}
      <input
        id={id}
        className={`${
          errors
            ? 'border-red-500 text-red-400 placeholder:text-red-400 focus:ring-red-500'
            : 'focus:border-primary focus:ring-primary'
        } form-input mt-2 w-full rounded-lg border border-gray-400 bg-transparent p-2 outline-none placeholder:first-letter:uppercase focus:ring-1`}
        placeholder={placeholder}
        type={type}
        {...register(label, options)}
      />
      {errors && <ErrorMessage message={errors.message} />}
    </div>
  );
}
export default Input;
