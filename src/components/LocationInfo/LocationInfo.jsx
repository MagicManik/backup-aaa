import { useEffect, useState } from "react";

const LocationInfo = () => {
  const [userLocation, setUserLocation] = useState({ country: "", city: "" });

  useEffect(() => {
    const getUserLocation = async () => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const apiKey = "d2b075b4a533447283a97f01672e8ff2"; // Replace with your API key
            const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.results && data.results.length > 0) {
              const { components } = data.results[0];
              const country = components.country;
              const city =
                components.city || components.town || components.village || "";
              setUserLocation({ country, city });
            }
          } catch (error) {
            console.error(error);
          }
        },
        (error) => {
          console.error(error);
        }
      );
    };

    getUserLocation();
  }, []);

  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Country: {userLocation.country}</li>
        <li>City: {userLocation.city}</li>
      </ul>
    </nav>
  );
};

export default LocationInfo;
