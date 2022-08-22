import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getTokens } from '../../pages/Home';
import { FormType } from '../../types';
import Button from '../Button';
import { Container, Input, Label, ButtonsGroup } from './styles';

export interface IToken {
  token: string;
  balance: string;
}

interface ITokenFormProps {
  type: FormType;
  defaultValues?: IToken;
}

export default function TokenForm(props: ITokenFormProps) {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [balance, setBalance] = useState('');

  const { editToken } = useParams();

  useEffect(() => {
    const tokens = getTokens();
    const editableToken = tokens.find((tokenParams: IToken) => {
      return tokenParams.token === editToken;
    });

    setToken(editableToken?.token);
    setBalance(editableToken?.balance);
  }, []);

  function updateToken(token: IToken) {
    const tokens = getTokens();
    const index = tokens.findIndex((tokenParams: IToken) => {
      return tokenParams.token === editToken;
    });

    try {
      validateToken(token.token);
      tokens[index] = token;
      localStorage.setItem('tokens', JSON.stringify(tokens));
      navigate('/');
      toast.success('Successfully updated token!');
    } catch (err: any) {
      toast.error(err.message);
    }
  }

  function validateToken(tokenName: string) {
    const tokens = getTokens();
    if (token === '' || token === undefined) {
      throw new Error('Token not filled');
    }
    if (balance === '' || balance === undefined) {
      throw new Error('Balance not filled');
    }

    props.type === FormType.AddToken &&
      tokens.forEach((token: IToken) => {
        if (tokenName.toLocaleLowerCase() === token.token.toLocaleLowerCase()) {
          throw new Error('Já existe um token com esse nome.');
        }
      });

    props.type === FormType.EditToken &&
      tokens.forEach((token: IToken) => {
        if (
          tokenName.toLocaleLowerCase() === token.token.toLocaleLowerCase() &&
          tokenName !== editToken
        ) {
          throw new Error('Já existe um token com esse nome.');
        }
      });
  }
  function createToken() {
    const tokens = getTokens();
    try {
      validateToken(token);
      tokens.push({
        token,
        balance,
      });
      localStorage.setItem('tokens', JSON.stringify(tokens));
      navigate('/');
      toast.success('Successfully created token!');
    } catch (err: any) {
      toast.error(err.message);
    }
  }

  function deleteToken(token: IToken) {
    let tokens = getTokens();
    try {
      tokens = tokens.filter((item: IToken) => item.token !== token.token);
      localStorage.setItem('tokens', JSON.stringify(tokens));
      navigate('/');
      toast.success('Successfully deleted token!');
    } catch (err: any) {
      toast.error(err.message);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    if (name === 'token') {
      setToken(value);
    } else {
      if (parseFloat(value) >= 0) {
        setBalance(value);
      } else {
        setBalance('');
      }
    }
  }

  return (
    <Container>
      <Label htmlFor="name">
        Token
        <Input
          id="token"
          type="text"
          name="token"
          value={token}
          onChange={handleChange}
        />
      </Label>

      <Label htmlFor="balance">
        Balance
        <Input
          id="balance"
          type="number"
          name="balance"
          min={0}
          value={balance}
          onChange={handleChange}
        />
      </Label>
      <ButtonsGroup type={props.type}>
        {props.type === FormType.EditToken && (
          <Button
            backgroundColor="#920000"
            color="white"
            content="Remove"
            onClick={() => deleteToken({ token, balance })}
          />
        )}

        <Button
          backgroundColor="#AA33B5"
          color="white"
          content="Save"
          onClick={() =>
            props.type === FormType.EditToken
              ? updateToken({ token, balance })
              : createToken()
          }
        />
      </ButtonsGroup>
    </Container>
  );
}
