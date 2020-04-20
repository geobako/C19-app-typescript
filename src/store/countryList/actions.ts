import TYPES from './types';
import {ThunkAction} from 'redux-thunk';
import {Action} from 'redux';
import axios from 'axios';
import {baseUrl} from '../../utils/constants';
import {CountryState} from './reducer';

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  CountryState,
  unknown,
  Action<string>
>;

export const getCountries = (): AppThunk => async dispatch => {
  try {
    dispatch({type: TYPES.GET_INFO.START});

    const accountResponse = await axios.get(`${baseUrl}/summary`);

    return dispatch({
      type: TYPES.GET_INFO.SUCCESS,
      payload: accountResponse.data,
    });
  } catch (error) {
    const payload = error;
    dispatch({type: TYPES.GET_INFO.ERROR, payload});
  }
};
