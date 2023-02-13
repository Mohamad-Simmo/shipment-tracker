import { FieldValues } from 'react-hook-form';
import { GenericInputProps } from '../types';
import { cloneElement } from 'react';
import { Path } from 'react-hook-form';

type Props<T extends FieldValues> = Pick<
  GenericInputProps<T>,
  'register' | 'options'
> & { icon: JSX.Element; label: string; name: Path<T>; className?: string };

function Radio<T extends FieldValues>(props: Props<T>) {
  return (
    <div className={props.className}>
      <input
        {...props.register(props.name, props.options)}
        type="radio"
        id={props.label}
        name={props.name}
        value={props.label}
        className="peer hidden"
      />
      <label
        className="flex cursor-pointer justify-center gap-2 rounded-lg border border-gray-400 px-8 py-4 text-xl font-semibold text-gray-500 peer-checked:border-primary peer-checked:bg-primary peer-checked:text-light peer-checked:ring-2 peer-checked:ring-primary"
        htmlFor={props.label}
      >
        <span>{cloneElement(props.icon)}</span>
        <span>{props.label[0].toUpperCase() + props.label.slice(1)}</span>
      </label>
    </div>
  );
}
export default Radio;
