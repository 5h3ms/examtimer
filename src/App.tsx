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
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import CssBaseline from '@material-ui/core/CssBaseline';
import AlarmAddIcon from '@material-ui/icons/AlarmAdd';

function App(): ReactElement {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: '20px',
      height: '100vh',
    },
  }));

  const classes = useStyles();

  const [theme, setTheme] = useState(true);
  const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon />;
  const appliedTheme = createMuiTheme(theme ? light : dark);

  const defaultTime = { minutes: 5 };
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
          <Button
            variant="contained"
            color="primary"
            onClick={addTimer}
            startIcon={<AlarmAddIcon />}
          ></Button>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="mode"
            onClick={() => setTheme(!theme)}
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
