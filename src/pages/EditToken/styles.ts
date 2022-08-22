import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #13152a;
 
`;

export const Logo = styled.img`
  width: 10%;
  padding: 3rem;
  height: auto;
`;


export const Image = styled.img`
  width: 10%;
  height: auto;
`;

export const Text = styled.text`
  color: white;
  font-weight: 700;
  font-size: 1.7rem;
`;

export const Header = styled.div`
  display: flex;
  width: auto;
  flex-direction: row;
`;
export const Tokens = styled.div`
color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;


  justify-content: space-between;
  width: 34rem;
  max-width: 90%;

`;



export const Token = styled.div`
  display: flex;
 
  align-items: center;
  justify-content: left;
  flex-direction: row;
`;


export const Input = styled.input`
  width: 100%;

`;
