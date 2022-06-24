import React from 'react';
import { Box, Grid, Typography } from "@mui/material";
import RoomData from "../types/room.type"

interface Props {
    roomData: RoomData;
}

export const RoomCard: React.FC<Props> = ({ roomData }) => {
    return (
    <Box sx={{ m: 1 , p: 1, boxSizing: "content-box"}} >
        <Grid
        container
        direction="row"
        >
            <Grid item xs={3}>
                <Typography sx={{ fontSize: 14, fontWeight: 600 }} gutterBottom>
                    {roomData.name}
                </Typography>
                <Typography variant="body2">
                    Max Adults: {roomData.occupancy.maxAdults}
                    <br />
                    Max Children: {roomData.occupancy.maxChildren}
                </Typography>
            </Grid>
            <Grid item xs={9}>
                <Typography variant="body2">
                {roomData.longDescription}
                </Typography>
            </Grid>
        </Grid>
    </Box>
    );
};