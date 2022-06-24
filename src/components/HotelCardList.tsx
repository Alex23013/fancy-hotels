import React from "react";
import { HotelCard } from './HotelCard';
import HotelData from "../types/hotel.type"
interface Props {
  hotels: HotelData[],
  currentRating : number,
  currentChild: number,
  currentAdults: number,
}

export const HotelCardList: React.FC<Props> = ({ hotels , currentRating, currentChild, currentAdults}) => {
  return (
    <ul>
      {hotels.map(( hotel) => (
        Number(hotel.starRating) >= currentRating &&
        <HotelCard key={hotel.id} hotelData={hotel} currentChild={currentChild} currentAdults={currentAdults} />
      ))}
    </ul>
  );
};
