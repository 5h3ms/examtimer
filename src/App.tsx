import './App.css';
import Timer from './components/Timer.react';
import { useState, useCallback, ReactElement } from 'react';
import {
  Switch,
  Grid,
  Paper,
  Typography,
  Card,
  Button,
} from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

function App(): ReactElement {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  const defaultTime = { minutes: 5 };
  const [timers, setTimers] = useState([<Timer {...defaultTime} key={0} />]);

  const addTimer = useCallback(() => {
    const id = timers.length;
    setTimers((timers) => [...timers, <Timer {...defaultTime} key={id} />]);
  }, [timers.length]);

  return (
    <ThemeProvider theme={theme}>
      <Paper className="App-paper">
        <Typography variant="h3">Centre number RU105</Typography>
        <Button variant="contained" color="primary" onClick={addTimer}>
          Add timer
        </Button>
        <Grid container spacing={5} justify="center">
          {timers.map((timer, index) => (
            <Grid item xs={6} key={index}>
              <Card variant="outlined" className="Card">
                <Typography variant="h5">Timer {index}</Typography>
                {timer}
              </Card>
            </Grid>
          ))}
        </Grid>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
