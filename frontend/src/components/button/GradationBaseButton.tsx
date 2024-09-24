import { backGradation } from "../../styles/Color";

interface GradationBaseButtonProps {
  buttonColor: string;
  label: string;
  buttonType?: "button" | "submit" | "reset";
  onClick?: () => void;
}

/**
 *
 * @param props
 * @returns グラデーションカラーのボタン
 */
const GradationBaseButton = (props: GradationBaseButtonProps) => {
  const colorClass = backGradation[props.buttonColor] || backGradation.blue;

  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <button
      type={props.buttonType || "button"}
      className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br ${colorClass}`}
      onClick={handleClick}
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {props.label}
      </span>
    </button>
  );
};

export default GradationBaseButton;
