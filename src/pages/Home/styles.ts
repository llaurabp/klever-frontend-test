import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  background-color: #13152a;
`;

export const Header = styled.div`
  display: flex;
  width: auto;
  flex-direction: row;
`;
export const Box = styled.div`
  display: flex;
  width: 35%;
`;

export const Tokens = styled.div`
color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  
  justify-content: center;

`;

export const Balance = styled.div`
color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

`;



export const TokenTable = styled.table`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

`;

export const TableRow = styled.tr`
  display: flex;
  width: 100%;
  justify-content: space-between;

`;

export const TableHead= styled.th`
  display: flex;
  align-items: center;

`;

