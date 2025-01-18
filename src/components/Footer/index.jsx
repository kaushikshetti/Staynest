import React from 'react';
import { Container, Grid, Typography, Link, Divider, Box } from '@mui/material';
import './styles.css';
function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" gutterBottom>
          Destinations to explore
        </Typography>

        <Box sx={{ display: 'flex', mb: 2 }}>
          <Link href="#" underline="none" sx={{ mr: 3, color: 'text.primary' }}>Other types of stays</Link>
          <Link href="#" underline="none" sx={{ mr: 3, color: 'text.primary' }}>Unique stays</Link>
          <Link href="#" underline="none" sx={{ color: 'text.primary' }}>Things to do</Link>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={2}>
          {[
            'Rentals with a patio', 'Ski-in/ski-out rentals', 'Flat rentals',
            'Farm stay rentals', 'Apartment rentals', 'Rentals with outdoor seating',
            'Rentals with lake access', 'Rentals with a kayak', 'Family-friendly rentals',
            'Loft rentals', 'Rentals with a fireplace', 'Rentals with a washing machine',
            'Rentals with breakfast', 'Earth house rentals', 'Rentals with a cinema',
            'Cottage rentals', 'Heritage hotel rentals'
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Typography variant="body2" color="text.primary">
                <Link href="#" underline="hover" color="inherit">
                  {item}
                </Link>
              </Typography>
              <Typography variant="caption" color="text.secondary">India</Typography>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Link href="#" sx={{ mx: 2 }}>Staynest</Link>
          <Link href="#" sx={{ mx: 2 }}>India</Link>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            © 2025 Staynest, Inc. · <Link href="#" color="inherit">Privacy</Link> · <Link href="#" color="inherit">Terms</Link> · <Link href="#" color="inherit">Site Map</Link>
          </Typography>
          <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Link href="#" color="inherit"><i className="fab fa-facebook"></i></Link>
            <Link href="#" color="inherit"><i className="fab fa-twitter"></i></Link>
            <Link href="#" color="inherit"><i className="fab fa-instagram"></i></Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
