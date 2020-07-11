import React from 'react';
import Switch from 'react-switch';
import { shade, lighten } from 'polished';
import { Container } from './styles';

import { useTheme } from '../../hooks/theme';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <Switch
        onChange={toggleTheme}
        checked={theme.title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.4, theme.colors.backgroundColor)}
        onColor={lighten(0.3, theme.colors.backgroundColor)}
      />
    </Container>
  );
};

export default ThemeSwitcher;
