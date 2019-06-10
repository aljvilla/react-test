import React from 'react';
import { Route } from 'react-router-dom';

import { ContextStore } from '../store';
import Wrapper from '../components/Wrapper';

const PublicRoute = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        return (
          <ContextStore comp={
            <Wrapper>
              <Component {...routeProps} />
            </Wrapper>
          } />
        )
      }
      }
    />
  );
};

export default PublicRoute;