import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const ColorButton = styled(Button)({
  width: '180px',	
  boxShadow: 'true',
  textTransform: 'true',
  fontSize: 14,
  fontWeight: 600,
  padding: '10px 5px 10px 5px',
  margin: '3px 3px 3px 3px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'red',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

export default function Gesfinanceira() {
  return (
	  
<Stack spacing={1} direction="row">
	  
<Container maxWidth="md">
<Typography variant="h6" color="text.secondary" align="center">{'GESTÃO FINANCEIRA'}</Typography>
	  
<Grid container rowSpacing={1} >
	  
<Grid item xs={3}>
<ColorButton variant="contained" onClick={()=> window.open("https://docs.google.com/spreadsheets/d/1VBPgiDmn3dgbHCTV6GMHFbIL118zLPLPfP4apSmJFyI/edit?rm=minimal#gid=1582162721", "_blank")}>CONTROLE DE CAIXA</ColorButton>
</Grid>

<Grid item xs={3}>
<ColorButton variant="contained" onClick={()=> window.open("https://docs.google.com/spreadsheets/d/1VBPgiDmn3dgbHCTV6GMHFbIL118zLPLPfP4apSmJFyI/edit?rm=minimal#gid=9212126", "_blank")}>CANTINA FINANCEIRO</ColorButton>
</Grid>

<Grid item xs={3}>
<ColorButton variant="contained" onClick={()=> window.open("https://docs.google.com/spreadsheets/d/1VBPgiDmn3dgbHCTV6GMHFbIL118zLPLPfP4apSmJFyI/edit?rm=minimal#gid=1043035436", "_blank")}>CANTINA ESTOQUE</ColorButton>
</Grid>

<Grid item xs={3}>
<ColorButton variant="contained" onClick={()=> window.open("https://docs.google.com/spreadsheets/d/1VBPgiDmn3dgbHCTV6GMHFbIL118zLPLPfP4apSmJFyI/edit?rm=minimal#gid=428219032", "_blank")}>EXTRACURRICULAR</ColorButton>
</Grid>

      </Grid>
</Container>
</Stack>
  );
}
