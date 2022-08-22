import styled from 'styled-components';
import { FormType } from '../../types';

export const Input = styled.input`
  display: block;
  width: 34rem;
  height: 1.8rem;
  border-radius: 3px;
  border: none;
  font-family: 'Montserrat';
  font-weight: 800;
  font-size: 1.2rem;
  padding: 0.2rem;
`;

export const Label = styled.label`
  display: block;
  border: none;
  font-weight: 600;
  text-align: left;
  padding: 1rem 0;
  color: white;
`;

export const Container = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type TokenForm = {
  type: string;
};
export const ButtonsGroup = styled.div<TokenForm>`
  display: flex;
  width: 100%;
  justify-content: ${props =>
    props.type === FormType.EditToken ? 'space-between' : 'flex-end'};
`;
