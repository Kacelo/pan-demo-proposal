// components/KeyPoints.js
import * as React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';

const keyPoints = [
  {
    title: 'About PAN',
    description: `The Payment Association of Namibia (PAN) is a registered association not for gain. Governed by its own Constitution and the Payment System Management Act, 2003 (No. 18 of 2003), PAN was constituted on 12 August 2005 by the Bank of Namibia as a Payment System Management Body.`,
  },
  {
    title: 'Membership',
    description: `PAN’s membership comprises all commercial banks present in Namibia, represented on the PAN Management Council (PMC). The council, headed by an independent chairperson, is the highest decision-making body for PAN.`,
  },
  {
    title: 'Objectives',
    description: `PAN manages, controls, and organizes all matters affecting interbank payments, payment clearing, and netting of interbank obligations. PAN aims to provide a forum for policy discussion, act as a medium for communication, and promote cooperation among its members.`,
  },
];

const KeyPoints = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" align="left" gutterBottom style={{color:"black"}}>
        Get to know us
      </Typography>
      <Grid container spacing={4}>
        {keyPoints.map((point, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {point.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {point.description}
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small" href="#">Learn More</Button> */}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default KeyPoints;
