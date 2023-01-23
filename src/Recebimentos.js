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
  backgroundColor: '#0063cc',
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

export default function Recebimentos() {
  return (


<Stack spacing={1} direction="column">
	  
<Typography variant="h6" color="text.secondary" align="center" sx={{ marginRight: '50px' }}>
      {'RECEBIMENTOS'}
</Typography>
	  
<ColorButton variant="contained" onClick={()=> window.open("https://docs.google.com/forms/d/e/1FAIpQLSdPw64U9_iQSCSIPeD_7M9N8hvn_hpEPcdqyzGgCDSECYzjVQ/viewform?usp=sf_link?rm=minimal", "_blank")}>
NOVO RECIBO </ColorButton>

<ColorButton variant="contained" onClick={()=> window.open("https://docs.google.com/spreadsheets/d/1Gj3T16k7iP5eWebTyUO1K42VqnPvVFuGVk8OJV6H7As/edit#gid=248925312", "_blank")}>
IMPRIMIR RECIBO </ColorButton>

<ColorButton variant="contained" onClick={()=> window.open("https://docs.google.com/spreadsheets/d/19gNmgmJwhRDLU1FN0j8oBN0jf8bysc3C87qzfplY1b8/edit?rm=minimal#gid=459260154", "_blank")}>
CONSULTAR RECIBOS </ColorButton>

<ColorButton variant="contained" onClick={()=> window.open("https://docs.google.com/spreadsheets/d/19gNmgmJwhRDLU1FN0j8oBN0jf8bysc3C87qzfplY1b8/edit?rm=minimal#gid=459260154v", "_blank")}>
LANÇAR REMESSA </ColorButton>

<ColorButton variant="contained" onClick={()=> window.open("https://docs.google.com/spreadsheets/d/19gNmgmJwhRDLU1FN0j8oBN0jf8bysc3C87qzfplY1b8/edit?rm=minimal#gid=2078420423", "_blank")}>
LANÇAR DESPESAS</ColorButton>

<ColorButton variant="contained" onClick={()=> window.open("https://docs.google.com/spreadsheets/d/19gNmgmJwhRDLU1FN0j8oBN0jf8bysc3C87qzfplY1b8/edit?rm=minimal#gid=2078420423", "_blank")}>
ENVIAR DINHEIRO</ColorButton>

<ColorButton variant="contained" onClick={()=> window.open("https://docs.google.com/spreadsheets/d/19gNmgmJwhRDLU1FN0j8oBN0jf8bysc3C87qzfplY1b8/edit?rm=minimal#gid=2137226283", "_blank")}>
ENVIAR CHEQUE</ColorButton>

<ColorButton variant="contained" onClick={()=> window.open("https://docs.google.com/spreadsheets/d/19gNmgmJwhRDLU1FN0j8oBN0jf8bysc3C87qzfplY1b8/edit?rm=minimal#gid=1720742169", "_blank")}>
ENVIAR PIX</ColorButton>

<ColorButton variant="contained" onClick={()=> window.open("https://docs.google.com/spreadsheets/d/1XeP3JbFB1bh7oF-Mcvq9igrNjjav9Yjtz0_kpY_OwrY/edit?rm=minimal#gid=1511222603", "_blank")}>
RECIBOS 2022</ColorButton>

</Stack>

  );
}
