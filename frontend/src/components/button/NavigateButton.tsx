import { Link } from "react-router-dom";
import GradationBaseButton from "./GradationBaseButton";

interface LinkButtonProps {
  to: string; //遷移先のパス
  label: string;
}

/**
 * リンクボタン
 * @param props
 * @returns
 */
const LinkButton = (props: LinkButtonProps) => {
  return (
    <Link to={props.to}>
      <GradationBaseButton label={props.label + " >"} buttonColor="purple" />
    </Link>
  );
};

export default LinkButton;
