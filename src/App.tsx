import React, {useState} from 'react';
import {HotelCardList} from './components/HotelCardList';
import {SearchBar} from './components/SearchBar';
import { CssBaseline, Container, Box } from "@mui/material";
import ApiService from "./services/api.service";
import HotelData from "./types/hotel.type"

function App() {

  const [hotels, setHotels] = useState<HotelData[] | []>([]);
  const [ratingValue, setRatingValue] = React.useState(3);
  const [adultsValue, setAdultsValue] = React.useState(1);
  const [childValue, setChildValue] = React.useState(0);

  const retrieveHotels = ()=> {
    ApiService.getAll()
      .then((response: any) => {
        const allHotels = response.data;
        setHotels(allHotels);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  const updateRatingValue = (ratingValue: number ):void => {
    setRatingValue(ratingValue)
  }

  const updateAdultsValue = (adultsValue: number ):void => {
    setAdultsValue(adultsValue)
  }

  const updateChildValue = (childValue: number ):void => {
    setChildValue(childValue)
  }

  React.useEffect( () => {
      retrieveHotels();
  }, []);

  return (
    <>
      <CssBaseline />
      <Container>
        <Box sx={{ m: 1 , p: 1}} >
          <img key={'banner-header'} src={'https://cutt.ly/pKW96DM'} style={{maxWidth: '100%', maxHeight: '100%'}} />
        </Box>
        <SearchBar
          currentRating={ratingValue}
          currentAdults={adultsValue}
          currentChild={childValue}
          updateRatingValue={updateRatingValue}
          updateAdultsValue={updateAdultsValue}
          updateChildValue={updateChildValue}
        />
        <HotelCardList hotels={hotels} currentRating={ratingValue} currentAdults={adultsValue} currentChild={childValue}/>
      </Container>
    </>
  );
}

export default App;
