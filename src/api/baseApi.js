import axios from 'axios';

export default axios.create({
  baseURL: 'https://def4-103-35-168-194.in.ngrok.io',
  headers: {
    'Content-type': 'application/json',
  },
});
