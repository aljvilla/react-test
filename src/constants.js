const { NODE_ENV } = process.env;
const basePath = {
  development: 'http://localhost:8000/',
  production: 'https://expressapi.aljvilla.now.sh/'
}
export const API_PATH = basePath[NODE_ENV];
export const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
export const GOOGLE_MAPS_GET_COUNTRY_NAME_PATH = `https://maps.googleapis.com/maps/api/geocode/json?latlng=:latLng&sensor=false&key=${GOOGLE_MAPS_API_KEY}`;