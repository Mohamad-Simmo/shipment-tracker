import { FormProps } from '../types';

function Form({ children, title, onSubmit }: FormProps) {
  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-6">
      <h2 className="text-center text-2xl font-semibold">{title}</h2>
      {children}
    </form>
  );
}
export default Form;
