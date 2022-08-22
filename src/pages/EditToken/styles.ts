import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #13152a;
`;

export const Text = styled.text`
  color: white;
  font-weight: 700;
  font-size: 1.7rem;
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 34rem;
  max-width: 90%;
`;
