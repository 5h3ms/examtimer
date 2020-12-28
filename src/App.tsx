import './App.css';
import Timer from './components/Timer.react';
import { useState, useCallback, ReactElement } from 'react';
import { Grid, Typography, TextField, Card, Button } from '@material-ui/core';

import { ThemeProvider } from '@material-ui/core';
import {
  createMuiTheme,
  makeStyles,
  ThemeOptions,
} from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import CssBaseline from '@material-ui/core/CssBaseline';
import { AlarmAddSharp } from '@material-ui/icons';

const defaultTime = { minutes: 5 };

function App(): ReactElement {
  const useStyles = makeStyles(() => ({
    root: {
      padding: '20px',
      height: '100vh',
    },
  }));

  const classes = useStyles();

  const [isLightTheme, setIsLightTheme] = useState(true);
  const icon = !isLightTheme ? <Brightness7Icon /> : <Brightness4Icon />;
  const appliedTheme = createMuiTheme(isLightTheme ? light : dark);
  const [timers, setTimers] = useState([<Timer {...defaultTime} key={0} />]);

  const addTimer = useCallback(() => {
    const id = timers.length;
    setTimers((timers) => [...timers, <Timer {...defaultTime} key={id} />]);
  }, [timers.length]);

  return (
    <ThemeProvider theme={appliedTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <Grid container justify="flex-end">
          <Button>Play all</Button>
          <Button>Pause all</Button>
          <IconButton
            color="primary"
            aria-label="add an alarm"
            onClick={addTimer}
          >
            <AlarmAddSharp />
          </IconButton>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="mode"
            onClick={() => setIsLightTheme(!isLightTheme)}
          >
            {icon}
          </IconButton>
        </Grid>
        <Grid container justify="center">
          <TextField
            fullWidth
            variant="standard"
            defaultValue="CENTRE NUMBER"
            inputProps={{
              style: { fontSize: 90, textAlign: 'center' },
              disableUnderline: true,
            }}
          ></TextField>
        </Grid>

        <Grid container spacing={5} justify="center">
          {timers.map((timer, index) => (
            <Grid item xs={6} key={index} justify="center">
              <Card variant="outlined" className="Card">
                <Typography variant="h5">Timer {index}</Typography>
                {timer}
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export const light: ThemeOptions = {
  palette: {
    type: 'light',
  },
};
export const dark: ThemeOptions = {
  palette: {
    type: 'dark',
  },
};

export default App;
