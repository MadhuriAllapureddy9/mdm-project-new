import React from 'react';
import { Stack, Button, CssBaseline, AppBar, Toolbar, Typography, Box, TextField, Grid } from '@mui/material';
import Home from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { DTR, Feeder, Section, SubStation } from '../components/Dropdown';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { Link } from "react-router-dom";
import ResponsiveDateRangePicker from '../components/DateDetails';
import MaterialChart from './SubmitAppScreen';
import { useDispatch } from 'react-redux';


export default function SelectTextFields() {//Main component 

  const initialValues = {//initiating values to textfields
    Sections: '',
    SubStation: '',
    Feeder: '',
    DTR: '',
    Meter: '',
    Ifyoualreadyknowthemeternumberpleaseenterhere: '',
    FromDate: '',
    ToDate: ''
  };
  const [values, setValues] = useState(initialValues);// State to store initial values
  const clear = () => {//to show a pop-up to display "verified" text
    alert("verified")
  }

  const handleInputChange = (e) => {//changing the input as per the values
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    console.log(e.target)
  };

  const handleSubmit = (e) => {// submitting the text fields' values to print at console
    e.preventDefault();
    console.log('InputFields', values);
    setValues({
      Sections: '',
      SubStation: '',
      Feeder: '',
      DTR: '',
      Meter: '',
      Ifyoualreadyknowthemeternumberpleaseenterhere: '',
      FromDate: '',
      ToDate: ''
    });
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar >
          <Box sx={{ width: '100%', maxWidth: 300 }}>
            <Typography variant='h6' gutterBottom component="div"><Home color="black" /><KeyboardArrowRightIcon />Reports</Typography>
            <Typography variant="h6" gutterBottom component="div">Load Profile Report</Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex', p: 1, m: 1, bgcolor: 'background.paper', flexDirection: 'row', }}>
      </Box>
      <Grid container direction="row" justifyContent="center" alignContent="center" >
        <TextField
          id="outlined-select-currency-native"
          name="Sections"
          value={values.Sections}
          onChange={handleInputChange}
          select
          label="Sections:"
          SelectProps={{
            native: true,
          }}
        >
          {Section.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          required
          label="Sub Station:"
          SelectProps={{
            native: true,
          }}
          name="SubStation"
          value={values.SubStation}
          onChange={handleInputChange}
        >
          {SubStation.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Grid>
      <Grid container direction="row" justifyContent="center" alignContent="center" >
        <TextField
          id="outlined-select-currency-native"
          select
          required
          label="Feeder:"
          SelectProps={{
            native: true,
          }}
          name="Feeder"
          value={values.Feeder}
          onChange={handleInputChange}
        >
          {Feeder.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          required
          label="DTR:"
          SelectProps={{
            native: true,
          }}
          name="DTR"
          value={values.DTR}
          onChange={handleInputChange}
        >
          {DTR.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Grid>
      <Grid container direction="row" justifyContent="center" alignContent="center" >
        <TextField
          id="outlined-select-currency-native"
          required
          label="Meter:"
          name="Meter"
          value={values.Meter}
          onChange={handleInputChange}
        ></TextField>
      </Grid>
      <Grid container direction="row" justifyContent="center" alignContent="center" >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" display="inline">
            If you already know the meter number, please enter here :
          </Typography>
          <TextField
            id="outlined-select-currency-native"
            name="Ifyoualreadyknowthemeternumberpleaseenterhere"
            required
            value={values.Ifyoualreadyknowthemeternumberpleaseenterhere}
            onChange={handleInputChange}
          ></TextField>
        </div>
      </Grid>
      );
      <Grid container direction="row" justifyContent="center" alignContent="center" >
        <TextField
          name="FromDate"
          label="From Date"
          type="date"
          variant="outlined"
          value={values.FromDate}
          onChange={handleInputChange}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          name="ToDate"
          label="To Date"
          type="date"
          variant="outlined"
          value={values.ToDate}
          onChange={handleInputChange}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true
          }}
        />
      </Grid>
      <Stack spacing={2} direction="row" justifyContent="center">
        <Button variant="contained" onClick={handleSubmit} ><Link to="/chart" style={{ textDecoration: 'none',textcolor: 'none' }} color="#FFF" underline="none">SUBMIT</Link></Button>
        <Button variant="contained" onClick={clear} >CLEAR</Button>
      </Stack>
      <br />
    </Box>
  );
}