import React, { createContext, useState } from 'react';

const { Provider, Consumer } = createContext();

const ContextStore = ({ comp }) => {
  const [mapConfig, setMapConfig] = useState({ center: { lat: -33.4552643, lng: -70.6449385 }, zoom: 6 });
  const [showInfoWin, setShowInfoWin] = useState({ show: false, lat: null, lng: null, countryName: null, weatherInfo: null });
  const [showErrorWin, setShowErrorWin] = useState({ show: false, message: null });
  const contextValues = { showInfoWin, setShowInfoWin, mapConfig, setMapConfig, showErrorWin, setShowErrorWin };
  return <Provider value={contextValues}>
    {comp}
  </Provider>
}

const WrapperConsumer = (Component) => {
  return (props) => (
    <Consumer>
      {context => <Component {...props} context={context} />}
    </Consumer>
  )
};

export default WrapperConsumer;
export { ContextStore, Consumer };