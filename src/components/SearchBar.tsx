import React from 'react';
import { Grid, Box, Rating } from "@mui/material";
import {CounterInput } from './CounterInput';

interface Props {
    currentRating: number;
    currentAdults: number;
    currentChild: number;
    updateRatingValue: (arg: number) => void;
    updateAdultsValue: (arg: number) => void;
    updateChildValue: (arg: number) => void;
}

const styleSearchBar = {
    position: 'absolute' as 'absolute',
    border: '1px solid #AFB1B1',
    backgroundColor: 'white',
    zIndex:1,
    width: '50%',
    marginTop: '-3%',
    marginLeft: '12%'
  };

export const SearchBar: React.FC<Props> = ({ currentRating, currentAdults, currentChild, updateRatingValue, updateAdultsValue, updateChildValue }) => {

    return (
        <Box sx={styleSearchBar}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                >
                <Grid item xs={4}>
                    <Rating
                        name="simple-controlled"
                        value={currentRating}
                        onChange={(event, newValue) => {
                            newValue && updateRatingValue(newValue)
                        }}
                    />
                </Grid>
                <CounterInput nameInput="Adults" currentValue={currentAdults} updateValue={updateAdultsValue} />
                <CounterInput nameInput="Children" currentValue={currentChild} updateValue={updateChildValue} />
            </Grid>
        </Box>
    );
};