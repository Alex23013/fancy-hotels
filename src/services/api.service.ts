import http from "../http-common";
import HotelData from "../types/hotel.type"
class ApiService {
  getAll() {
    return http.get<Array<HotelData>>("hotels?collection-id=OBMNG");
  }
  get(id: string) {
    return http.get<HotelData>(`roomRates/OBMNG/${id}`);
  }
}
export default new ApiService();