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
const ServicesData = [
    {
      image: Norcan,
      title: "Norcan Fluid Power Ltd.",
       text: "By tapping in our global network of high quality cost effective manufacturers, our team prides ourselves on being able to source off the shelf equipment in a highly constrained and limited supply chain environment.  Whether you need equipment supplied on short notice, or to a specific spec, our team works hard for you to find the equipment you need for your project.",
      
    },
    {
      image:Mic,
      title: "Mic Energy",
       text: "By tapping in our global network of high quality cost effective manufacturers, our team prides ourselves on being able to source off the shelf equipment in a highly constrained and limited supply chain environment.  Whether you need equipment supplied on short notice, or to a specific spec, our team works hard for you to find the equipment you need for your project.",
     
    },
    {
      image: H,
      title: "H Energy",
       text: "By tapping in our global network of high quality cost effective manufacturers, our team prides ourselves on being able to source off the shelf equipment in a highly constrained and limited supply chain environment.  Whether you need equipment supplied on short notice, or to a specific spec, our team works hard for you to find the equipment you need for your project.",
    },
 {
      image: Norcan,
      title: "Norcan Fluid Power Ltd.",
       text: "By tapping in our global network of high quality cost effective manufacturers, our team prides ourselves on being able to source off the shelf equipment in a highly constrained and limited supply chain environment.  Whether you need equipment supplied on short notice, or to a specific spec, our team works hard for you to find the equipment you need for your project.",
      
    },
   
    ]

 const Services = () => {

 return (
  <div className="Clients-container" style={{minHeight: '100vh', padding: '16px',marginTop: '0rem',display: 'flex',flexDirection:"column", justifyContent: 'space-around', alignItems: 'center',backgroundImage:`url('')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',  }}>

    <div className='Clients-heading-container'>
        <Typography variant="h3" style={{ color: 'black', marginTop: '' ,fontWeight:"bolder" }}>
        Our Services
      </Typography>
    </div>
    
    
    <div className='Clients-grid-container'>

    
    <Grid container justifyContent="center"spacing={1}  >
      {ServicesData.map((card) => (
        <Grid item key={card.id} xs={12} sm={6} md={3} lg={3} >
        <Card  sx={{ height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '16px',
                transition: 'background-color 0.2s, transform 0.2s',
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                  transform: 'scale(1.02)',
                }, }} elevation={3}>
          <CardMedia
            component="img"
            alt={card.title}
            height="140"
            image={card.image}
          />
          <CardContent sx={{ flex: 1,color:"white", padding: '16px',background:'#a46a02'}}>
            <Typography gutterBottom variant="h7" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="white">
              {card.text}
            </Typography>
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

export default Services;
