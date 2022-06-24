import React  from 'react';

import { Card, Grid, Typography, Modal, Button, Box, Divider, Rating } from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { RoomCard } from './RoomCard';
import HotelData from "../types/hotel.type"
import RoomData from "../types/room.type"
import ApiService from "../services/api.service";

interface Props {
    hotelData: HotelData;
    currentChild: number;
    currentAdults: number;
}

const styleModalBox = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const HotelCard: React.FC<Props> = ({ hotelData, currentChild, currentAdults }) => {

  const [rooms, setRooms] = React.useState<RoomData[] | []>([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const retrieveRooms = ()=> {
    ApiService.get(hotelData.id)
      .then((response: any) => {
        const selectedRooms: RoomData[] = [];
        response.data.rooms.map((room:RoomData) => (
            currentChild <= room.occupancy.maxChildren &&
            currentAdults <= room.occupancy.maxAdults &&
            selectedRooms.push(room)
        ))
        setRooms(selectedRooms);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  React.useEffect( () => {
    retrieveRooms();
  }, [currentChild, currentAdults]);

  if (rooms.length == 0)
    return (<div />)
  return (
    <Card variant="outlined" sx={{margin:"2%"}}>
        <Grid container spacing={2} m={"1%"}>
            <Grid item xs={3} >
                <Carousel animation={"slide"} height={200} autoPlay={false} stopAutoPlayOnHover={false} indicators >
                    {
                    hotelData.images.map( (item, i) => <img key={i} src={item.url} style={{maxWidth: '100%', maxHeight: '100%'}} /> )
                    }
                </Carousel>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h4" component="div">
                    {hotelData.name}
                </Typography>
                <Typography variant="body2">
                    <LocationOnIcon/> {hotelData.address1}, { hotelData.address2}, {hotelData.postcode}, {hotelData.town}, {hotelData.country}
                </Typography>
                <br />
                <Button onClick={handleOpen} variant={'outlined'}>More Details</Button>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                    <Box sx={styleModalBox} >
                        <Typography id="modal-modal-title" variant="h5" component="h2" >
                            <strong>Details of {hotelData.name}</strong>
                        </Typography>
                        <Box display="flex" sx={{ mt: 1 }}>
                            <Typography >
                                Check in: <strong>{hotelData.checkInHours}:{hotelData.checkInMinutes}</strong>
                            </Typography>
                            <Typography sx={{ ml: 2 }}>
                                Check out: <strong>{hotelData.checkOutHours}:{hotelData.checkOutMinutes}</strong>
                            </Typography>
                        </Box>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {hotelData.description}
                        </Typography>
                    </Box>
                </Modal>
            </Grid>
            <Grid item xs={3} >
                <Rating name="read-only" value={Number(hotelData.starRating)} readOnly />
            </Grid>
        </Grid>
        {rooms.map((room) => (
            <>
                <RoomCard key={`${hotelData.id}-${room.id}`} roomData={room}  />
                <Divider />
            </>
        ))}
    </Card>
  );
};