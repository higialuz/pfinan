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
  backgroundColor: 'darkblue',
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

export default function Extracurricular() {
  return (


<Stack spacing={1} direction="column">
	  
<Typography variant="h6" color="text.secondary" align="center" sx={{ marginRight: '50px' }}>
      {'EXTRACURRICULAR'}
</Typography>
	  
<ColorButton variant="contained" onClick={()=> window.open("https://forms.gle/69Y8k78E37GGgFJf7", "_blank")}>
MATRICULAR</ColorButton>

<ColorButton variant="contained" onClick={()=> window.open("#", "_blank")}>
ENCERRAR</ColorButton>

<ColorButton variant="contained" onClick={()=> window.open("https://docs.google.com/spreadsheets/d/19gNmgmJwhRDLU1FN0j8oBN0jf8bysc3C87qzfplY1b8/edit?rm=minimal#gid=852593512", "_blank")}>
SALA BALLET</ColorButton>

<ColorButton variant="contained" onClick={()=> window.open("https://docs.google.com/spreadsheets/d/19gNmgmJwhRDLU1FN0j8oBN0jf8bysc3C87qzfplY1b8/edit?rm=minimal#gid=760933552", "_blank")}>
SALA FUTSAL</ColorButton>

<ColorButton variant="contained" onClick={()=> window.open("https://docs.google.com/spreadsheets/d/19gNmgmJwhRDLU1FN0j8oBN0jf8bysc3C87qzfplY1b8/edit?rm=minimal#gid=1301110742", "_blank")}>
SALA JUDÔ</ColorButton>

<ColorButton variant="contained" onClick={()=> window.open("https://docs.google.com/spreadsheets/d/19gNmgmJwhRDLU1FN0j8oBN0jf8bysc3C87qzfplY1b8/edit?rm=minimal#gid=407668839", "_blank")}>
SALA ESPANHOL</ColorButton>

<ColorButton variant="contained" onClick={()=> window.open("https://docs.google.com/spreadsheets/d/19gNmgmJwhRDLU1FN0j8oBN0jf8bysc3C87qzfplY1b8/edit?rm=minimal#gid=1348320916", "_blank")}>
SALA KUNG FU</ColorButton>

<ColorButton variant="contained" onClick={()=> window.open("https://google.com", "_blank")}>
PROJETOS ESPECIAIS</ColorButton>

</Stack>

  );
}
