import { useFormContext } from 'react-hook-form';

interface ErrorMessageProps {
  registerName: string;
  required?: boolean;
}

const ErrorMessage = (props: ErrorMessageProps) => {
  const {
    formState: { errors },
  } = useFormContext();

  /**
   *
   * @returns 対象のエラーメッセージの取得
   */
  const getMessage = () => {
    if (props.required) {
      return <>{errors[props.registerName] && <span className="text-red-500">This field is required</span>}</>;
    }
  };

  return <>{getMessage()}</>;
};
export default ErrorMessage;
