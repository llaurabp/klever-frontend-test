
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import HeaderComponent from "../../components/Header";
import TokenForm from "../../components/TokenForm";
import { FormType } from "../../types";
import { Box, Container, Text } from "./styles";

export interface IToken {
  token: string;
  balance: number;
}
export default function AddToken() {
  const navigate = useNavigate();

  return (
    <Container>
      <HeaderComponent hasAddButton={false}></HeaderComponent>
      <Box>
        <Text>Add Token</Text>
        <Button
          backgroundColor='grey'
          color='white'
          content='Back'
          onClick={() => { navigate('/') }}
        />
      </Box>
      <TokenForm type={FormType.AddToken} />
    </Container>

  );
}