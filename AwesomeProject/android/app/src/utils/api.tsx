/**
 * Only ES6 =))))
 *
 * GET iD current location
 * Example ``RESPONSE``:
 * URi: " https://www.metaweather.com/api/location/search/?query=London "
 *
   [
      {
        "title": "London",
        "location_type": "City",
        "woeid": 44418,
        "latt_long": "51.506321,-0.12714"
      }
  ]
 *
 */
export const getLocationId = async (city: any) => {
  const response = await fetch(
    `https://www.metaweather.com/api/location/search/?query=${city}`,
  );

  const r = await response.json();

  return r[0].woeid;
};

export const getWeather = async (woeid: any) => {
  const response = await fetch(
    `https://www.metaweather.com/api/location/${woeid}/`,
  );

  let {title, consolidated_weather} = await response.json();
  let {weather_state_name, the_temp, created} = consolidated_weather[0];

  return {
    location: title,
    weather: weather_state_name,
    temperature: the_temp,
    created: created,
  };
};
