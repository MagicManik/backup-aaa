import { useEffect, useState } from "react";

const useCurrentLocation = () => {
  const [userLocation, setUserLocation] = useState({ country: "", capital: "", city: "" });

  useEffect(() => {
    const storedLocation = sessionStorage.getItem("userLocation");

    if (storedLocation) {
      setUserLocation(JSON.parse(storedLocation));
    } else {
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
                const { components, annotations } = data.results[0];
                const country = components.country;
                const city =
                  components.city || components.town || components.village || "";
                const locationInfo = { country, city };

                // Now, fetch the capital city using Restcountries API
                try {
                  const countryResponse = await fetch(`https://restcountries.com/v3/name/${country}`);
                  const countryData = await countryResponse.json();
                  const capital = countryData[0]?.capital || "";

                  // Ensure that capital is a string
                  const capitalString = Array.isArray(capital) ? capital[0] : capital;

                  // Update userLocation with capital
                  setUserLocation({ ...locationInfo, capital: capitalString });

                  // Store location in session storage to avoid repeated requests
                  sessionStorage.setItem("userLocation", JSON.stringify({ ...locationInfo, capital: capitalString }));
                } catch (error) {
                  console.error("Error fetching capital:", error);
                }
              }
            } catch (error) {
              console.error("Error fetching location:", error);
            }
          },
          (error) => {
            console.error("Geolocation error:", error);
          }
        );
      };

      getUserLocation();
    }
  }, []);

  return userLocation;
};

export default useCurrentLocation;
