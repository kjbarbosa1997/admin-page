import './App.css';
import {createTheme, ThemeProvider, Paper, Box, Container, Button, Grid, FormControl, Select, MenuItem, TextField} from '@mui/material';
import React from 'react';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider, DesktopDatePicker } from '@mui/x-date-pickers';
import moment from 'moment';



const theme = createTheme({

});



function App() {
  
  const [value, setValue] = React.useState(moment('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <FormControl fullWidth>
      <ThemeProvider theme={theme}>
        <Paper elevation={10} className = "adminPaper" sx={{ m: 4}}>
        <Box sx={{flexGrow: 1, m: 7}}>
          <Grid container spacing={2}>
            <Grid item xs={6}> {/*Split the page into two halves, left and right*/}
                <Container>
                      <TextField fullWidth
                        id="outlined-multiline-flexible"
                        label="Multiline"
                        multiline
                        rows = {20}
                        />             
                </Container>
            </Grid>
          <Grid item xs={6} container spacing={2}>
            <Container>
              <Paper elevation={24} className = "adminPaperRightTask" sx={{ m: 2}}>
                <div class="tasks">
                  <div class="tasksLeft">
                    <Grid item xs={3}>
                      <div className="serviceDropdown">
                        <Select
                          labelId="services-dropdown"
                          id="services-dropdown"
                          label="Services"
                          sx ={{m: 2, minWidth: 258 }}
                          >            
                          <MenuItem value={1}>Service 1</MenuItem>
                          <MenuItem value={2}>Service 2</MenuItem>
                          <MenuItem value={3}>Service 3333333333333333333</MenuItem>
                        </Select>
                      </div>
                    <div class="datePickerStart">
                      <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DesktopDatePicker 
                          label="Date of Service Start"
                          inputFormat="MM/DD/YYYY"
                          value={null}
                          onChange={handleChange}
                          renderInput={(params) => <TextField {...params} sx={{ m: 2 }}/>}
                        />
                      </LocalizationProvider>
                    </div>
                  <div class="datePickerEnd">
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                      <DesktopDatePicker
                        label="Date of Service End"
                        inputFormat="MM/DD/YYYY"
                        value={null}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} sx={{ m: 2 }} />}
                      />
                    </LocalizationProvider>
                  </div>
                    </Grid>
                      </div>
                        <div class="tasksRight">
                          <h1> PLACEHOLDER TEXT </h1>
                        </div>
                      </div>
                    </Paper>
                  </Container>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        <Box m={1} display="flex" justifyContent="center" alignItems="flex-end">
          <Button variant="contained" >
          Submit
          </Button>
        </Box>
      </ThemeProvider>
    </FormControl>
  );
}

export default App;
