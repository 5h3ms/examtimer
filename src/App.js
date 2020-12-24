import './App.css';
import Timer from './components/Timer.react';
import React, {useState} from 'react';
import { Switch, Grid, Paper, Typography, Card} from '@material-ui/core';
import { ThemeProvider, createMuiTheme} from '@material-ui/core/styles';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    }

  });


  return (
    <ThemeProvider theme ={theme}>
      <Paper style={{ height: "100vh" }}>
      <Typography variant="h3" >Centre number RU105</Typography>
      
      <Grid container spacing={5} justify="center">
        <Grid item xs={6}><Card variant="outlined"><Typography variant="h5">Mathematics paper 1</Typography><Timer minutes={5} /></Card></Grid>
        <Grid item xs={6}><Card variant="outlined"><Typography variant="h5">Science paper 2</Typography><Timer days={1} hours={2} minutes={5} seconds={3} /></Card></Grid>
      </Grid>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} /> 
      </Paper>
    
     
    </ThemeProvider>
  );
}

export default App;
