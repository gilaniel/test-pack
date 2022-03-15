export interface ButtonProps {
  text: string;
  classnames: string;
  onClick(): void;
  spinner?: boolean;
  disabled?: boolean;
}