import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const ViewLayer = (props) => {
    return (
        <Container component="main">
            <Box
                sx={{
                    marginTop: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {props.children}
            </Box>
        </Container>
    );
}

export default ViewLayer;
