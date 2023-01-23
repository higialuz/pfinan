import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import Typography from '@mui/material/Typography';

const ColorButton = styled(Button)({
  width: '222px',	
  boxShadow: 'true',
  textTransform: 'true',
  fontSize: 15,
  padding: '10px 5px 10px 5px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'purple',
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

export default function Cantina() {
  return (


<Stack spacing={1} direction="column">
	  
<Typography variant="h6" color="text.secondary" align="center" sx={{ marginRight: '55px' }}>
      {'CANTINA'}
</Typography>
	  
<ColorButton variant="contained" onClick={()=> window.open("https://docs.google.com/spreadsheets/d/19gNmgmJwhRDLU1FN0j8oBN0jf8bysc3C87qzfplY1b8/edit?rm=minimal#gid=1271119993", "_blank")}>
CONSUMO MENSAL</ColorButton>

<ColorButton variant="contained" onClick={()=> window.open("https://docs.google.com/spreadsheets/d/1XCxfkUQT5ZIIvEnUS3YGeZumFqyxXMKM-gx7vy03a6w/edit?rm=minimal#gid=157336788", "_blank")}>
CONSUMO DETALHADO</ColorButton>

<ColorButton variant="contained" onClick={()=> window.open("https://docs.google.com/spreadsheets/d/19gNmgmJwhRDLU1FN0j8oBN0jf8bysc3C87qzfplY1b8/edit?rm=minimal#gid=310197548", "_blank")}>
CRÉDITOS</ColorButton>

<ColorButton variant="contained" onClick={()=> window.open("https://docs.google.com/spreadsheets/d/1XeP3JbFB1bh7oF-Mcvq9igrNjjav9Yjtz0_kpY_OwrY/edit?rm=minimal#gid=1948196831", "_blank")}>
CONSUMO 2022</ColorButton>

</Stack>

  );
}
