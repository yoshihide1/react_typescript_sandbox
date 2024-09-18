import { background, text } from "../../styles/Color";

interface ButtonBaseProps {
  buttonColor: string;
  textColor: string;
  label: string;
  buttonType?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const ButtonBase = (props: ButtonBaseProps) => {
  const colorClass = background[props.buttonColor] || background.blue;
  const textClass = text[props.textColor] || text.black;

  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button
      type={props.buttonType || "button"}
      className={`group relative h-12 overflow-hidden rounded-md ${colorClass} px-6 ${textClass} transition m-1 w-32`}
      onClick={handleClick}
    >
      <span>{props.label}</span>
      <div className="absolute inset-0 h-full w-0 bg-white/30 transition-[width] group-hover:w-full"></div>
    </button>
  );
};
export default ButtonBase;
