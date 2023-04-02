const { Search } = Input;
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/product-controls';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import Table from '../../components/table';
import Loader from '../../components/loader';
import './style.css';

const Products = () => {
  const { products } = useContext(ProductContext);
  const [data, setData] = useState(products?.items);

  // I added a key for each product here, because
  // Table does not accept id, but only key
  // ---------------------------------------
  //  Added 'No description' text to each product with empty description
  products?.items?.forEach((item, idx) => {
    item.key = idx;
    item.productName = item.productName;
    item.description =
      item.description === '' ? 'No description' : item.description;
  });

  const onSearch = (value) => {
    const filteredData = products?.items.filter(({ productName }) =>
      productName?.toLowerCase().includes(value?.toLowerCase())
    );
    setData(filteredData);
  };
  return (
    <div className='main'>
      <div className='search'>
        <Search
          placeholder='Search Product'
          onSearch={onSearch}
          style={{
            width: 250,
          }}
        />
      </div>
      <Table data={data} />
    </div>
  );
};

export default Products;
