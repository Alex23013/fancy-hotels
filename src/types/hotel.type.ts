interface Url{
    url: string,
}

export default interface HotelData {
    id?: any | null,
    name: string,
    description: string,
    address1?: string,
    address2?: string,
    starRating: string,
    postcode: string,
    town: string,
    country: string,
    checkInMinutes:string,
    checkInHours:string,
    checkOutMinutes:string,
    checkOutHours:string,
    images: Url []
}