export interface SelectProps {
  options: any[];
  loading?: boolean;
  onChange({ value, name }: any): void;
  defaultValue?: any;
  isMulti?: boolean;
  isSearch?: boolean;
  max?: number;
  checked?: any[];
  notAll?: boolean;
  readOnly?: boolean;
  error?: boolean;
  className?: string;
  fixed?: boolean;
}