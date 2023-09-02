import axios from 'axios';
import _ from 'lodash';

import {
  API_BASE_URL,
  API_KEY,
} from '../enums';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const request = (method, url, data, timeout) =>
  instance
  .request({
    method,
    url,
    data: {
      ...data,
      apiKey: API_KEY,
    },
    timeout,
  })
  .then((response) => _.get(response, ['data', 'result']))
  .catch((error) => {
    throw new Error(
      _.get(error, ['response', 'data', 'message'], 'API error'), {
        cause: error,
      }
    );
  });

export const GET = (url, timeout) => request('get', url, undefined, timeout);
export const POST = (url, data, timeout) => request('post', url, data, timeout);
export const PUT = (url, data) => request('put', url, data);
export const DELETE = (url) => request('delete', url);