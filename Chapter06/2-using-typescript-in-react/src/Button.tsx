import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
};

const Button = ({ children, disabled = false }: ButtonProps) => {
  return <button disabled={disabled}>{children}</button>;
};

export default Button;
