import { addDays, format } from "date-fns";
import { useEffect, useState } from "react";
import { useHotelRQ } from "../requests/useHotelRQ";
import useCurrentLocation from "./useCurrentLocation";

const useHotels = () => {
  const { isLoading, mutate, data } = useHotelRQ("/search");
  const hotels = data?.data;
  const userLocation = useCurrentLocation();

  const userCapitalName = userLocation?.capital;
  // console.log(userCapitalName)

  const [date] = useState([
    {
      startDate: addDays(new Date(), 1),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const checkInDate = format(date[0].startDate, "yyyy-MM-dd");
  const checkOutDate = format(date[0].endDate, "yyyy-MM-dd");

  useEffect(() => {
    mutate({
      location: "Dhaka",
      radius: "5",
      checkIn: checkInDate,
      checkOut: checkOutDate,
      occupancies: [
        {
          adult: 2,
          child: 0,
          child_age: [],
        },
      ],
      guest_nationality: "SA",
    });
  }, [userCapitalName || checkInDate || checkOutDate]);

  return { isLoading, hotels };
}

export default useHotels;