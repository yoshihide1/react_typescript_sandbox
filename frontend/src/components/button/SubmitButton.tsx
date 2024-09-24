import BaseButton from "./BaseButton";

interface SubmitButtonProps {
  requestUrl: string;
  label: string;
}

const SubmitButton = (props: SubmitButtonProps) => {
  return (
    <BaseButton
      buttonType="submit"
      buttonColor="blue"
      textColor="white"
      label={props.label}
    />
  );
};

export default SubmitButton;
