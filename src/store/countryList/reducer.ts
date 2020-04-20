import TYPES from './types';

interface Country {
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
}

interface Global {
  NewConfirmed?: number;
  TotalConfirmed?: number;
  NewDeaths?: number;
  TotalDeaths?: number;
  NewRecovered?: number;
  TotalRecovered?: number;
}

export interface CountryState {
  countries: Country[];
  global: Global;
}

interface Action {
  type: string;
  payload: any;
}

const initialState: CountryState = {
  countries: [],
  global: {},
};

const reducer = (state = initialState, {type, payload}: Action) => {
  switch (type) {
    case TYPES.GET_ACCOUNT_INFO.SUCCESS:
      return {
        ...state,
        error: false,
        user: payload,
      };

    default:
      return state;
  }
};

export default reducer;
