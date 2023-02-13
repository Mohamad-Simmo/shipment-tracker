import { FieldValues } from 'react-hook-form';
import { Carrier, Customer, GenericInputProps } from '../types';

type SelectProps<T extends FieldValues> = GenericInputProps<T> & {
  data: Customer[] | Carrier[] | undefined;
};

function Select<T extends FieldValues>(props: SelectProps<T>) {
  return (
    <div>
      <label
        className={
          props.options?.required
            ? "after:font-semibold after:text-red-500 after:content-['*']"
            : undefined
        }
        htmlFor="shipper"
      >
        {props.name
          ? props.name
          : props.label[0].toUpperCase() + props.label.slice(1)}
      </label>
      <select
        className={`mt-2 w-full rounded-lg border border-gray-400 bg-transparent p-2 outline-none focus:ring-1  ${
          props.errors
            ? 'border-red-500 text-red-400 focus:border-red-500 focus:ring-red-500'
            : 'focus:border-primary focus:ring-primary'
        }`}
        id="shipper"
        {...props.register(props.label, props.options)}
      >
        {props.data?.map((item) => (
          <option className="text-black" key={item.id} value={item.id}>
            {item.contact.name}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Select;
