import axios from 'axios';

export const baseUrl = 'https://e9f2-103-35-168-194.in.ngrok.io';

export default axios.create({
  baseURL: 'https://e9f2-103-35-168-194.in.ngrok.io',
  headers: {
    'Content-type': 'application/json',
  },
});
