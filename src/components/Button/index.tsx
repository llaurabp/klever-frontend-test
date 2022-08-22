import { StyledButton } from "./styles";

export interface IButtonProps {
  color: string;
  backgroundColor: string;
  onClick?: () => void;
  content: string;
}

export default function Button(props: IButtonProps) {
  return <StyledButton {...props}>{props.content}</StyledButton>;
}
