import axios from './axios';

const ProductService = {
  login(_username, _password, _subdomain = 'toko') {
    console.log({ _username, _password, _subdomain });
    // return axios({
    //   method: 'POST',
    //   url: 'https://toko.ox-sys.com/security/auth_check',
    //   data: data,
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    // });
  },
};

export default ProductService;
