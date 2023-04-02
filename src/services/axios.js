import axios from 'axios';

axios.defaults.baseURL = 'https://toko.ox-sys.com';
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // alert('Parol yoki username xato', error.response.status);
      return error;
    }
  }
);

export default axios;
