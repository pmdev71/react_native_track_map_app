import axios from 'axios';

export default axios.create({
  baseURL: 'https://78f6-103-35-168-194.in.ngrok.io',
  headers: {
    'Content-type': 'application/json',
  },
});
