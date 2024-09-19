import { background, text } from "../../styles/Color";

interface BaseButtonProps {
  buttonColor: string;
  textColor: string;
  label: string;
  buttonType?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const BaseButton = (props: BaseButtonProps) => {
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
      className={`group relative h-12 overflow-hidden rounded-md ${colorClass} px-2 ${textClass} transition m-1 w-32`}
      onClick={handleClick}
    >
      <span>{props.label}</span>
      <div className="absolute inset-0 h-full w-0 bg-white/30 transition-[width] group-hover:w-full"></div>
    </button>
  );
};
export default BaseButton;
