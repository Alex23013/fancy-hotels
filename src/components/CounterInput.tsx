import React from 'react';
import { Grid, Typography, IconButton } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

interface Props {
    nameInput: string,
    currentValue: number,
    updateValue: (arg: number) => void
}

export const CounterInput: React.FC<Props> = ({ nameInput, currentValue, updateValue }) => {
    const add = (factor = 1) => {
        const newCounter = currentValue + factor >= 0 ? currentValue + factor : 0
        updateValue(newCounter)
      };

    return (
        <Grid item xs={4} display="flex">
            <Typography sx={{ mt: 1 }}>
                {nameInput}:
            </Typography>
            <IconButton onClick={() => add(-1)}>
                <IndeterminateCheckBoxIcon/>
            </IconButton>
            <Typography sx={{ mt: 1 }}>
                {currentValue}
            </Typography>
            <IconButton  onClick={() => add()}>
            <AddBoxIcon/>
            </IconButton>
        </Grid>
    );
};