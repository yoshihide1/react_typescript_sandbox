import { Link } from "react-router-dom";
import ButtonBase from "./ButtonBase";

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
      <ButtonBase label={props.label} buttonColor="green" textColor="white" />
    </Link>
  );
};

export default LinkButton;
