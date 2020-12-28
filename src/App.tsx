import './App.css';
import Timer from './components/Timer.react';
import {
  useState,
  useCallback,
  ReactElement,
  RefObject,
  createRef,
} from 'react';
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

type TimerHandle = React.ElementRef<typeof Timer>;

interface TimerProps {
  id: number;
  ref: RefObject<TimerHandle>;
}

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

  const [timersCount, setTimersCount] = useState(1);
  const [timers, setTimers] = useState<Array<TimerProps>>([
    { id: 0, ref: createRef<TimerHandle>() },
  ]);
  const onRemoveTimer = useCallback(
    (index) => {
      setTimers((timers) => timers.filter((value) => value.id !== index));
    },
    [setTimers],
  );

  const onAddTimer = useCallback(() => {
    const id = timersCount;
    const ref = createRef<TimerHandle>();
    setTimers((timers) => [...timers, { id: id, ref: ref }]);
    setTimersCount((count) => count + 1);
  }, [timersCount]);

  const onPauseAll = useCallback(() => {
    timers.forEach((timer) => timer.ref.current?.pause());
  }, [timers]);

  const onPlayAll = useCallback(() => {
    timers.forEach((timer) => timer.ref.current?.play());
  }, [timers]);

  return (
    <ThemeProvider theme={appliedTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <Grid container justify="flex-end">
          <Button onClick={onPlayAll}>Play all</Button>
          <Button onClick={onPauseAll}>Pause all</Button>
          <IconButton
            color="primary"
            aria-label="add an alarm"
            onClick={onAddTimer}
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
          {timers.map(({ id, ref }) => (
            <Grid item xs={6} key={id} justify="center">
              <Card variant="outlined" className="Card">
                <Typography variant="h5">Timer {id}</Typography>
                <Timer
                  {...defaultTime}
                  index={id}
                  key={id}
                  ref={ref}
                  onClose={onRemoveTimer}
                />
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
