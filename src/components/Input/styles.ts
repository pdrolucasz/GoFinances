import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.background};
  border-radius: 10px;
  width: 80%;
  color: #363f5f;
  margin: 10px;

  input {
    background: transparent;
    border: 0;
    color: ${props => props.theme.colors.text};
    padding: 10px;

    &::placeholder {
      color: #666360;
    }
  }

  button {
    margin: 0 auto;
  }
`;
