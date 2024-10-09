import { useFormContext } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

interface SelectBoxProps {
  registerName: string;
  label: string;
  options: { label: string; value: string | number }[];
}

const SelectBox = (props: SelectBoxProps) => {
  const { register } = useFormContext();

  return (
    <div className="w-1/4">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.label}</label>
      <select
        {...register(props.registerName, { required: true })}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="" disabled selected></option>
        {props.options.map((o, i) => (
          <option key={i} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <ErrorMessage required registerName={props.registerName} />
    </div>
  );
};
export default SelectBox;
