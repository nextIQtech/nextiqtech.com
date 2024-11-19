import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const SoftwareCompanyCards = () => {

  const cards = [
    {
      title: 'NEXT LEVEL SOLUTIONS',
      description: 'SEAMLESSLY INTEGRATING DIVERSE PLATFORMS TO DELIVER COHESIVE, INNOVATIVE TECHNOLOGICAL SOLUTIONS THAT BRIDGE SYSTEMS AND ENHANCE FUNCTIONALITY.',
      image: 'images/mouse.png',
    },
    {
      title: 'NEXT-GEN DESIGNS',
      description: 'FRESH, INNOVATIVE WEB DESIGNS WITH CLEAN AND EFFICIENT BACK-END USER EXPERIENCES.',
      image: 'images/designs.png',
    },
    {
      title: 'BESPOKE SOFTWARE',
      description: 'CUSTOMIZED SOFTWARE SOLUTIONS DESIGNED TO MEET UNIQUE BUSINESS NEEDS WITH PRECISION AND FLEXIBILITY.',
      image: 'images/keyboard.png',
    },
  ];

  return (
    <Grid container spacing={4} justifyContent="center" className="my-8">
      {cards.map((card, index) => (
        <Grid key={index} item xs={12} sm={6} md={4}>
          <Card className="card-box h-full card-hover-about">
            <CardMedia className="media" image={card.image} title={card.title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" className="float-end max-w-[200px] text-right">
                {card.title}
              </Typography>
              <img src={card.image} alt="card images" className="m-auto h-[300px]"/>
              <Typography variant="body2" component="p">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SoftwareCompanyCards;