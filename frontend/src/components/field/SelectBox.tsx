import { useFormContext } from 'react-hook-form';
import ErrorMessage from './ErrorMessage';

interface SelectBoxProps {
  registerName: string;
  label: string;
  priority: string;
}

const SelectBox = (props: SelectBoxProps) => {
  const { register } = useFormContext();

  return (
    <div>
      <label className="sr-only">Underline select</label>
      <select
        {...register(props.registerName, { required: true })}
        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      >
        <option>{props.label}</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
      <ErrorMessage required registerName={props.registerName} />
    </div>
  );
};
export default SelectBox;
