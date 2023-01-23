
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Copyright() {
  return (
	  <Container maxWidth="sm">
	  	<Box sx={{ my: 5 }}>  
	  
          <Typography variant="subtitle1" color="text.secondary" align="center">
            {'Dúvidas, ajuda ou reportar um erro : '}
            <Button sx={{ color: "black" }} onClick={()=> window.open("https://google.com", "_blank")}>
              clique aqui
            </Button>
          </Typography>
	  
		</Box>
	</Container>

  );
}