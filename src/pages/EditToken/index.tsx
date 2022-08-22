
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import HeaderComponent from "../../components/Header";
import { getTokens } from "../Home";
import { Container, InnerContainer, Text } from "./styles";
import TokenForm from "../../components/TokenForm";
import { FormType } from "../../types";

export interface IToken {
  token: string;
  balance: number;
}
export default function EditToken() {

  const navigate = useNavigate();

  return (
    <Container>
      <HeaderComponent hasAddButton={false}></HeaderComponent>
      <InnerContainer>
        <Text>Edit Token</Text>
        <Button
          backgroundColor='grey'
          color='white'
          content='Back'
          onClick={() => { navigate('/') }}
        />
      </InnerContainer>
      <TokenForm type={FormType.EditToken} />
    </Container>

  );
}