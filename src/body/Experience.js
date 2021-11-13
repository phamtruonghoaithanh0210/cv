import React from 'react'
import {Box, Typography, } from '@mui/material'
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, } from "@mui/lab"
import dataCV from "../data/cv.json" 

function Experience() {
    const data= dataCV["history"]
    console.info(data)
    return (
        <Box
            sx={{
            width: 766,
            height: 430,
            padding: 2,
            borderRight: '1px solid grey',
            '&:hover': {
                backgroundColor: '#bae8e8',
                opacity: [0.9, 0.8, 0.7],
            },
            }}
        >
            <Typography variant="h6" color="inherit" component="div">
                Experience
            </Typography>
            <Timeline  >
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" color="primary"/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="body2" color="inherit" component="div">
                            OCT 2020 - DEC 2020
                        </Typography>
                        <Typography variant="body2" color="inherit" component="span">
                            Mini project 'Softwave Technology
                        </Typography>    
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
    )
}

export default Experience
