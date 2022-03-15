import React from "react";
import { Spinner } from "react-bootstrap";

interface ButtonProps {
  text: string;
  classnames: string;
  onClick(): void;
  spinner?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  classnames,
  text,
  onClick,
  children,
  spinner,
  disabled = false,
}) => {
  console.log("button");

  return (
    <button
      className={`button ${classnames}`}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="df ai-center jc-center">
        {spinner && (
          <div className="mr-5">
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          </div>
        )}
        {children}
        {text}
      </div>
    </button>
  );
};

export default Button;
