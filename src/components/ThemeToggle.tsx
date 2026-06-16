import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useColorScheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export function ThemeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Tooltip title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
      <IconButton
        onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
        size="small"
        aria-label="toggle color mode"
        sx={{ color: 'var(--portal-icon-base)' }}
      >
        {mode === 'dark' ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
      </IconButton>
    </Tooltip>
  );
}
