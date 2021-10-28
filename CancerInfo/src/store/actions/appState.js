export const CAROUSEL_DONE = 'CAROUSEL_DONE';
export const FETCHING_DATA = 'FETCHING_DATA';
export const DONE_FETCHING_DATA = 'DONE_FETCHING_DATA';
export const UPDATED_CANCER_TYPES = 'UPDATED_CANCER_TYPES';

import axios from 'axios';

import Configuration from '../../Configuration';

import Constants from '../../Constants';

export const processCarouselDone = () => {
  return {
    type: CAROUSEL_DONE,
  };
};

export const getCancerTypes = () => {
  const url =
    Configuration.servers['production'].serverIP +
    Configuration.cancerInfoEndPoints.cancerTypes;

  return async dispatch => {
    dispatch({type: FETCHING_DATA});
    try {
      console.log('Before call');
      const res = await axios.get(url, {
        headers: {
          Accept: 'application/json',
          apikey: Configuration.apikey,
          authorization: 'Bearer YOUR_JWT_TOKEN_HERE',
        },
      });
      console.log('Done...');
      console.log(res.data);
      dispatch({type: DONE_FETCHING_DATA});
      dispatch({type: UPDATED_CANCER_TYPES, payload: res.data});
    } catch (err) {
      dispatch({type: DONE_FETCHING_DATA});
    }
  };
};
