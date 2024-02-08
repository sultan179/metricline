import * as React from 'react';
import Norcan from "../Assets/Norcan.PNG";
import Mic from "../Assets/Mic.PNG"
import H from "../Assets/H.PNG"


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Grid } from '@mui/material';
import { Padding } from '@mui/icons-material';
const workInfoData = [
    {
      image: Norcan,
      title: "Norcan Fluid Power Ltd.",
      
    },
    {
      image:Mic,
      title: "Mic Energy",
     
    },
    {
      image: H,
      title: "H Energy",
    },
 {
      image: Norcan,
      title: "Norcan Fluid Power Ltd.",
      
    },
    {
      image:Mic,
      title: "Mic Energy",
     
    },
    {
      image: H,
      title: "H Energy",
    },
 {
      image: Norcan,
      title: "Norcan Fluid Power Ltd.",
      
    },
    {
      image:Mic,
      title: "Mic Energy",
     
    },
    {
      image: H,
      title: "H Energy",
    },]

 const Clients = () => {

 return (
  <div className="Clients-container" style={{minHeight: '100vh', padding: '16px',marginTop: '0rem',display: 'flex',flexDirection:"column", justifyContent: 'space-around', alignItems: 'center',backgroundImage:`url()`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',filter: 'brightness(95%)',  }}>

    <div className='Clients-heading-container'>
        <Typography variant="h3" style={{ color: 'black', marginTop: '' ,fontWeight:"bolder" }}>
        Our Clients
      </Typography>
    </div>
    
     <div className='Clients-container-text'>
        <Typography variant="h6" style={{ color: 'gray', marginTop: '' ,fontWeight:"bolder" }}>
        We build trust between clients, suppliers, governments and society through the capability, care and commitment that our teams bring.

Delivering major programmes, programme management, cost and commercial management, net zero and digital solutions, we achieve better outcomes to create a positive impact on the world around us.

Working effectively across these areas, we bring the innovation and clarity that teams need to realise their full potential across the real estate, infrastructure and natural resources sectors.

It’s how we’ve made the difference for more than 75 years.

Transforming performance for a green, inclusive and productive world.
      </Typography>
    </div>
    
    <div className='Clients-grid-container'>

    
    <Grid container justifyContent="center"  spacing={{ xs: 2, md: 3 }}>
      {workInfoData.map((card) => (
        <Grid item key={card.id} xs={6} sm={4} md={3} lg={2} >
        <Card  sx={{ height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '16px',
                transition: 'background-color 0.2s, transform 0.2s',
                '&:hover': {
                  backgroundColor: '#fff5e2',
                  transform: 'scale(1.02)',
                }, }} elevation={3}>
          <CardMedia
            component="img"
            alt={card.title}
            height="140"
            image={card.image}
          />
          <CardContent sx={{ flex: 1,color:"black", padding: '16px',backgroundColor: '#fff5e3',
           position:'relative'}}>
            <Typography gutterBottom variant="h7" component="div">
              {card.title}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              {card.text}
            </Typography> */}
          </CardContent>
          {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
        </Grid>
      ))}
    </Grid>
    </div>
    </div>
  );

 
 };

export default Clients;
