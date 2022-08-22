import styled from 'styled-components';

type Button = {
  color: string;
  backgroundColor: string;
};

export const StyledButton = styled.button<Button>`
  display: inline-block;
  cursor: pointer;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  min-width: 8rem;
  width: fit-content;
  height: fit-content;
  font-weight: bold;
  font-family: 'Montserrat';
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  border: none;
  :hover {
    filter: brightness(0.8);
  }
  transition: 100ms ease-in-out;
`;
