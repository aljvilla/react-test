/* eslint-disable no-useless-escape */
import React, { Fragment } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

import WrapperConsumer from '../../store';
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_GET_COUNTRY_NAME_PATH, API_PATH } from '../../constants';
import InfoWindow from '../../components/InfoWindow';
import ErrorWindow from '../../components/ErrorWindow';

const WeatherMap = (props) => {
  const { context: { setMapConfig, mapConfig, setShowInfoWin, showInfoWin, showErrorWin, setShowErrorWin } } = props;

  const getCapitalCountryCoordinates = (address) => new Promise((resolve, reject) => {
    const geocoder = new window.google.maps.Geocoder();
    try {
      geocoder.geocode({ address }, (results, status) => {
        if (status === window.google.maps.GeocoderStatus.OK) {
          const { lat, lng } = results[0].geometry.location
          resolve({ lat: lat(), lng: lng() });
        } else reject();
      });
    } catch (err) {
      reject(err);
    }
  });
  const getPlaceName = ({ lat, lng }) => axios({ method: 'get', url: GOOGLE_MAPS_GET_COUNTRY_NAME_PATH.replace(':latLng', `${lat},${lng}`) });

  const getWeatherInfo = async ({ lat, lng }) => {
    try {
      const countryNameResp = await getPlaceName({ lat, lng });
      if (countryNameResp.status !== 200) throw new Error('Error on get country name');
      const countryName = countryNameResp.data.results[0].formatted_address.split(',').reverse()[0];
      const { lat: capLat, lng: capLng } = await getCapitalCountryCoordinates(countryName.replace(/\(|\)|\ |\-/g, ''));
      const weatherInfoResp = await axios({ method: 'get', url: `${API_PATH}?lat=${capLat}&lng=${capLng}` });
      setMapConfig({ ...mapConfig, center: { lat: capLat, lng: capLng } })
      setShowInfoWin({ show: true, lat: capLat, lng: capLng, countryName, weatherInfo: weatherInfoResp.data });
      return countryNameResp;
    } catch (err) {
      setShowErrorWin({ show: true, message: 'Something went wrong' });
      setTimeout(() => {
        setShowErrorWin({ show: false, message: null });
      }, 5000);
    }
  }
  return <div style={{ width: '100%', height: '100vh' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: String(GOOGLE_MAPS_API_KEY) }}
      center={mapConfig.center}
      defaultZoom={mapConfig.zoom}
      // options={{ zoomControl: false, disableDoubleClickZoom: true, maxZoom: mapConfig.zoom, minZoom: mapConfig.zoom }}
      onClick={({ lat, lng }) => getWeatherInfo({ lat, lng })}
    >
      <Fragment>
        {showInfoWin.show && <InfoWindow lat={showInfoWin.lat} lng={showInfoWin.lng} />}
        {showErrorWin.show && <ErrorWindow lat={showInfoWin.lat} lng={showInfoWin.lng} />}
      </Fragment>
    </GoogleMapReact>
  </div>;
}

export default WrapperConsumer(WeatherMap);