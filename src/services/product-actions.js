import { getItem } from '../helpers/storage-actions';
import axios from './axios';

const ProductService = {
  login(_username, _password, _subdomain = 'toko') {
    return axios({
      method: 'POST',
      url: 'https://toko.ox-sys.com/security/auth_check',
      data: { _username, _password, _subdomain },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  getData() {
    return axios({
      method: 'GET',
      url: 'https://toko.ox-sys.com/variations',
      headers: {
        Authorization: `Bearer ${getItem('token')}`,
      },
    });
  },
};

export default ProductService;
