type Props = {
  children?: React.ReactNode;
  type?: 'submit' | 'button';
  className?: string;
};

function Button({ type = 'button', children, className }: Props) {
  return (
    <button
      className={
        'rounded-lg bg-primary px-4 py-2 text-sm font-semibold uppercase text-light' +
        ' ' +
        className
      }
      type={type}
    >
      {children}
    </button>
  );
}
export default Button;
