import React from 'react'
import {Box, Typography} from '@mui/material'

export default function Info() {
    return (
        <Box
            sx={{
            width: 766,
            height: 300,
            padding: 2,
            '&:hover': {
                backgroundColor: '#e3f6f5',
                opacity: [0.9, 0.8, 0.7],
            },
            }}
        >
            <Typography variant="h5" color="inherit" component="div">
                Introduction
            </Typography>
        </Box>
    )
}
