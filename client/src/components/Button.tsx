type Props = {
  children?: React.ReactNode;
  type?: 'submit' | 'button';
  className?: string;
  disabled?: boolean;
};

function Button({ type = 'button', children, className, disabled }: Props) {
  return (
    <button
      disabled={disabled}
      className={`rounded-lg bg-primary px-4 py-2 text-sm font-semibold uppercase text-light disabled:cursor-not-allowed disabled:bg-gray-500 ${className}`}
      type={type}
    >
      {children}
    </button>
  );
}
export default Button;
