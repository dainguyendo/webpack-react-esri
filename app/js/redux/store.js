import { createStore, applyMiddleware } from 'redux';
import appReducer from 'js/redux/reducers/appReducer';
import { asyncActions, logger } from 'js/redux/middleware';

const middleware = [ asyncActions ];

// Add Logger middleware if not production
if (process.env.NODE_ENV !== 'production') { middleware.push(logger); }

export default createStore(
  // Reducers
  appReducer,
  // Enhancers
  applyMiddleware(...middleware)
);
