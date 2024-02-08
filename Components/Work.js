import * as React from 'react';
import Equipment from "../Assets/equipment.jpg";
import fabrication from "../Assets/fabrication.jpg";
import skid from "../Assets/skid.jpg";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Grid } from '@mui/material';

const workInfoData = [
  {
    image: Equipment,
    title: "Equipment Supply",
    text: "By tapping into our global network of high-quality, cost-effective manufacturers, our team prides itself on being able to source off-the-shelf equipment in a highly constrained and limited supply chain environment. Whether you need equipment supplied on short notice or to a specific spec, our team works hard for you to find the equipment you need for your project.",
  },
  {
    image: fabrication,
    title: "Fabrication",
    text: "Leveraging our strategic relationships uniquely positioned around the world, our fabrication partners provide the highest quality fabrication for your project, meeting all industry integrity standards. Wherever your project is located, our fabrication partners can provide cost-effective fabrication services for your needs.",
  },
  {
    image: skid,
    title: "Custom Modular Skids",
    text: "With years of experience designing custom modular packaged skids, our team will work hard to design the most practical skid for your project. Combined with our other products and services, our custom modular packaged skids are a great cost-effective way to get your project off the ground quickly, cost-effectively, and with high operating efficiencies.",
  },
];

const Work = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const handleExpand = (index) => {
    setHoveredIndex(index);
  };

  const handleCollapse = () => {
    setHoveredIndex(null);
  };

  return (
    <div style={{
      minHeight: '100vh',
      padding: '16px',
      marginTop: '0rem',
      display: 'flex',
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'scroll',
      backgroundSize: 'contain'
    }}>
      <div className='Products-heading-container'>
        <Typography variant="h3" style={{ color: 'black', marginBottom: '2rem', fontWeight: "bolder" }}>
          Our Products
        </Typography>
      </div>

      <div className='Clients-grid-container'>
        <Grid container justifyContent="center" spacing={3} sx={{ alignItems: 'stretch' }}>
          {workInfoData.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3} sx={{ height: hoveredIndex === index ? 'auto' : 'fit-content' }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  transition: 'transform 1s ease',
                  transform: hoveredIndex === index ? 'scale(1.05)' : 'none',
                  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
                }}
                elevation={3}
                onMouseEnter={() => handleExpand(index)}
                onMouseLeave={handleCollapse}
              >
                <CardMedia
                  component="img"
                  alt={card.title}
                  height="140"
                  image={card.image}
                />
                <CardContent
                  sx={{
                    flex: 1,
                    padding: '16px',
                    maxHeight: hoveredIndex === index ? '100%' : '160px',
                    
                    overflow: 'hidden',
                    transition: 'max-height 1s ease',
                  }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {hoveredIndex === index ? card.text : card.text.slice(0, 100) + '...'}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Work;
