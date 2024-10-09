import { useFormContext } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

interface TextInputProps {
  label: string;
  registerName: string;
  placeholder: string;
  required?: boolean;
  // rulesも渡せるようにする
}

/**
 *
 * @param props
 * @returns type=textのインプットフィールド
 */
const TextInput = (props: TextInputProps) => {
  const { register } = useFormContext();
  return (
    <div className="relative z-0 w-full mb-5 group">
      <div>
        <label htmlFor={props.registerName} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {props.label}
        </label>
        <input
          id={props.registerName}
          type="text"
          {...register(props.registerName, { required: props.required })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={props.placeholder}
        />
      </div>
      <ErrorMessage required registerName={props.registerName} />
    </div>
  );
};
export default TextInput;
