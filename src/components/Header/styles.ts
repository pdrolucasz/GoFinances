import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background-color: ${props => props.theme.colors.backgroundColor};
  background-image: ${props => props.theme.colors.backgroundImage};

  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        opacity: 0.6;
        transition: opacity 0.2s;
        position: relative;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 1;
        }

        &.active {
          opacity: 1;
        }

        &.active:after {
          content: '';
          width: 80px;
          height: 2px;
          background: #ff8720;
          position: absolute;
          top: 27px;
          left: 0;
        }
      }
    }
  }
`;
