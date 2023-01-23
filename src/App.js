import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Extracurricular from './Extracurricular';
import Recebimentos from './Recebimentos';
import Gesfinanceira from './Gesfinanceira';
import Cantina from './Cantina';
import Cobranca from './Cobranca';
import Footer from './Footer';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export default function App() {
	
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
	
	
  return (  
    <Container maxWidth="md">
	  
	  <Box sx={{ width: '100%', marginTop: '50px', marginBottom: '30px', marginRight: '20px' }}>
	  	<Typography variant="h4" color="text.secondary" align="center" sx={{ marginRight: '50px' }}>{'Paideia Admin'}</Typography>	  
      </Box>
	  	  
	  <Box sx={{ flexGrow: 1 }}>
      <Grid container columns={1}>

        <Grid container spacing={1}>
          <Grid item xs={4}>
              <Recebimentos />
          </Grid>
          <Grid item xs={4}>
              <Extracurricular />
          </Grid>
          <Grid item xs={4}>
              <Cantina />
              <Cobranca />
          </Grid>
        </Grid>	

	  
	  <Box sx={{ marginTop: '30px'}}>
              <Gesfinanceira />
	  </Box>
	  
        </Grid>
      </Box>

	  <Box sx={{ width: '100%' }}>
	  	  	<Footer />	  
      </Box>

    </Container>
  );
}


