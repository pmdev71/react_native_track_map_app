import axios from 'axios';

export const baseUrl = 'https://c11c-103-35-168-194.in.ngrok.io';

export default axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-type': 'application/json',
  },
});
