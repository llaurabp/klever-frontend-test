import { TbEdit } from 'react-icons/tb';
import { useNavigate } from "react-router-dom";
import HeaderComponent from "../../components/Header";
import { IToken } from "../AddToken";
import { Box, Container, TableHead, TableRow, Tokens, TokenTable } from "./styles";
import "./styles.ts";

export function getTokens() {
  const tokens = localStorage.getItem('tokens');
  if (tokens) {
    return JSON.parse(tokens);
  }
  return [];
}
export default function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <HeaderComponent hasAddButton={true}></HeaderComponent>
      <Box>
        <Tokens>
          <TableRow>
            <TableHead>
              <h1>Tokens </h1>
            </TableHead>
            <TableHead>
              <h1>Balance</h1>
            </TableHead>
          </TableRow>
          {getTokens().map((token: IToken) => (
            <TokenTable>
              <TableRow>
                <TableHead>
                  <TbEdit cursor='pointer' size={32} onClick={() => navigate(`/edit-token/${token.token}`)} />
                  <h1> {token.token}</h1>
                </TableHead>
                <TableHead>
                  <h1> {token.balance}</h1>
                </TableHead>
              </TableRow>
            </TokenTable>
          ))}
        </Tokens>
      </Box>
    </Container>
  );
}
