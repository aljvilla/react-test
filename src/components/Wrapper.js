import React from 'react';

import WrapperConsumer from '../store';

const Wrapper = (props) => {
  const { children, context: { loading } } = props;
  return <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      {loading&& <div>Cargando . . .</div>}
      {children}
    </div>
  </div>
};

export default WrapperConsumer(Wrapper);