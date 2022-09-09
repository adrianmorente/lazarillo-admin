import React from 'react';
import { Paper, Typography } from '@mui/material';
import ViewLayer from '../ViewLayer';

const AboutView = () => {
    return (
        <ViewLayer>
            <Paper elevation={8} sx={{ m: 1, p: 2, width: 250 }}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h4">
                            Proyecto: Lazarillo Admin Frontend
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h5">
                            Realizado por:
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h5">
                            Adrián Morente
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">
                            ETSIIT - Universidad de Granada
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </ViewLayer>
    );
}

export default AboutView;