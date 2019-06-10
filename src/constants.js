
export const API_PATH = 'https://expressapi.aljvilla.now.sh/';
export const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
export const GOOGLE_MAPS_GET_COUNTRY_NAME_PATH = `https://maps.googleapis.com/maps/api/geocode/json?latlng=:latLng&sensor=false&key=${GOOGLE_MAPS_API_KEY}`;