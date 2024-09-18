interface ButtonProps {
  buttonColor?: string;
  textColor?: string;
  label: string;
  buttonType?: "button" | "submit" | "reset";
  onClick: () => void;
}

const Button = ({
  buttonColor = "blue",
  textColor = "white",
  label,
  buttonType = "button",
  onClick,
}: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <button
      type={buttonType}
      className={`group relative h-12 overflow-hidden rounded-md bg-${buttonColor}-500 px-6 text-${textColor} transition m-1 w-32`}
      onClick={handleClick}
    >
      <span>{label}</span>
      <div className="absolute inset-0 h-full w-0 bg-white/30 transition-[width] group-hover:w-full"></div>
    </button>
  );
};
export default Button;
