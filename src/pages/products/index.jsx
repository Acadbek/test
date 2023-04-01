import { useContext, useState } from 'react';
import { ProductContext } from '../../context/controls';

const Users = () => {
  const { getData } = useContext(ProductContext);
  const [datas, setData] = useState([]);

  return (
    <div>
      <h1>Mahsulotlar</h1>
    </div>
  );
};

export default Users;
