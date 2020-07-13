import styled from 'styled-components';
import { Form } from '@unform/web';
import { shade } from 'polished';

export const Title = styled.h2`
  color: #363f5f;
  text-align: center;
`;

export const FormCreate = styled(Form)`
  display: flex;
  flex-direction: column;
  span {
    display: grid;
    grid-template-columns: 2fr 2fr;

    select {
      background: ${props => props.theme.colors.background};
      border-radius: 10px;
      width: 80%;
      color: ${props => props.theme.colors.text};
      font-size: 18px;
      padding: 10px;
      margin: 10px;
      cursor: pointer;

      border: 0;

      option {
        color: ${props => props.theme.colors.text};
      }
    }
  }

  button {
    text-align: center;
    background: rgb(77, 77, 184);
    border: 0;
    width: 200px;
    height: 40px;
    align-self: center;
    color: #f4ede8;

    &:hover {
      background: ${shade(0.4, 'rgb(77, 77, 184)')};
    }
  }
`;
