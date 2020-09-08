import React from 'react';
import {
    Typography,
    Box,
} from '@material-ui/core';

export default function CardPreviewVideos({ item }) {
    return (
        <Box>
            <img
                style={{ width: '100%' }}
                alt={item.title}
                src={item.thumb}
            />
            <Box>
                <Typography
                    style={{ fontWeight: 600 }}
                    gutterBottom
                    variant='body1'
                    color='textPrimary'
                >
                    {item.title}
                </Typography>
                <Typography
                    display='block'
                    variant='body2'
                    color='textSecondary'
                >
                    {item.channel}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                    {`${item.views} • ${item.date}`}
                </Typography>
            </Box>
        </Box>
    );
}