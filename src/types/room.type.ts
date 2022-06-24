interface Occupancy{
  maxAdults: number,
  maxChildren: number,
}

export default interface RoomData {
  id?: any | null,
  name: string,
  shortDescription: string,
  longDescription: string,
  occupancy: Occupancy,
}