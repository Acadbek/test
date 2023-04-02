import { createContext, useEffect, useState } from 'react';
import { setItem } from '../helpers/storage-actions';
import ProductService from '../services/product-actions';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [errors, serError] = useState('');

  // login
  const login = async (_username, _password) => {
    try {
      const response = await ProductService.login(_username, _password);
      response?.data?.token && setItem('token', response?.data?.token);
    } catch (error) {
      serError(error);
    }
  };

  // get all products
  const getAllProducts = async () => {
    try {
      const response = await ProductService.getData();
      response.status === 200 && setProducts(response?.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ login, products, errors }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
