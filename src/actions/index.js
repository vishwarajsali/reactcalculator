import {calsRef} from '../config/firebase';
import {FETCH_CALS} from './types';

export const addCal = newCal => async dispatch => {
  calsRef.push().set(newCal);
};
 
 
export const fetchCals = () => async dispatch => {
  // calsRef.on("value", snapshot => {
  //   dispatch({
  //     type: FETCH_CALS,
  //     payload: snapshot.val()
  //   });
  // });


  calsRef.orderByChild('timestamp').limitToLast(10).on("value", snapshot => {
    dispatch({
      type: FETCH_CALS,
      payload: snapshot.val()
    });
  });
};
 