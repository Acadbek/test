import { createContext, useEffect, useState } from 'react';
import { setItem } from '../helpers/storage-actions';
import ProductService from '../services/product-actions';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // login
  const login = async (_username, _password) => {
    const response = await ProductService.login(_username, _password);
    setItem('token', response.data.token);
  };

  // get all products
  const getAllProducts = async () => {
    const response = await ProductService.getData();
    response.status === 200 && setProducts(response?.data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ login, products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
