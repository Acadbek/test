import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/product-controls';
import Table from '../../components/table';

const Products = () => {
  const { products } = useContext(ProductContext);

  // I added a key for each product here, because
  // Table does not accept id, but only key
  // --------------------
  //  Added 'No description' text to each product with empty description

  products?.items?.forEach((item, idx) => {
    item.key = idx;
    item.description =
      item.description === '' ? 'No description' : item.description;
  });

  return <Table data={products?.items} />;
};

export default Products;
