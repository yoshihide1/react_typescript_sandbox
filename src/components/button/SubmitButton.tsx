import ButtonBase from "./ButtonBase";

interface SubmitButtonProps {
  requestUrl: string;
  label: string;
}

const SubmitButton = (props: SubmitButtonProps) => {
  return (
    <ButtonBase
      buttonType="submit"
      buttonColor="blue"
      textColor="white"
      label={props.label}
    />
  );
};

export default SubmitButton;
