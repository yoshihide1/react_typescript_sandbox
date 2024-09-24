import { useNavigate } from "react-router-dom";
import BaseButton from "./BaseButton";

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <BaseButton
      buttonColor={"gray"}
      textColor={"white"}
      label={"< Back"}
      onClick={goBack}
    />
  );
};

export default BackButton;
