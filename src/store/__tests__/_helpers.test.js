import {asyncTypes} from '../_helpers';

describe('test async types function', () => {
  test('Run without second argument', () => {
    const result = {
      GET_INFO: {
        START: 'GET_INFO_START',
        SUCCESS: 'GET_INFO_SUCCESS',
        ERROR: 'GET_INFO_ERROR',
      },
    };
    expect(asyncTypes('GET_INFO')).toEqual(result);
  });

  test('Run with second argument', () => {
    const result = {
      GET_INFO: {
        START: 'COUNTRY_GET_INFO_START',
        SUCCESS: 'COUNTRY_GET_INFO_SUCCESS',
        ERROR: 'COUNTRY_GET_INFO_ERROR',
      },
    };
    expect(asyncTypes('GET_INFO', 'COUNTRY')).toEqual(result);
  });
});
