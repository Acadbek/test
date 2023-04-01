import { createContext } from 'react';
import { setItem } from '../helpers/storage-actions';
import ProductService from '../services/product-actions';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const login = async (_username, _password) => {
    await ProductService.login(_username, _password);
  };
  const changeSidebarStatus = (bool) => {
    let b = bool;
    if (b === true) {
      return false;
    }
    if (b === false) {
      return true;
    }
    console.log(bool);
  };
  return (
    <ProductContext.Provider value={{ login, changeSidebarStatus }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
