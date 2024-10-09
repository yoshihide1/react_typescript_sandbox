import { deleteRequest } from "../common/ApiUtils";
import BaseButton from "./BaseButton";

interface DeleteButtonProps {
  requestUrl: string;
  callback: () => void;
}

const DeleteButton = (props: DeleteButtonProps) => {
  const handleClick = () => {
    deleteRequest(props.requestUrl, props.callback);
  };

  return <BaseButton buttonType="button" buttonColor="red" textColor="white" label="Delete" onClick={handleClick} />;
};

export default DeleteButton;
