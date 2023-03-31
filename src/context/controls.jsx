import { createContext } from 'react';
import ProductService from '../services/product-actions';
import { setItem } from '../helpers/storage-actions';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const login = async (_username, _password) => {
    await ProductService.login(_username, _password);
    // .then((response) => {
    //   setItem('jwt', response.data.token);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  };
  const value = 'helgii';
  return (
    <ProductContext.Provider value={{ login, value }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
