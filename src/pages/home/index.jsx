import { useContext } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ProductContext } from '../../context/product-controls';
import Card from '../../components/statistics-card';
import './styles.css';

const Home = () => {
  const { products } = useContext(ProductContext);
  const price = products?.items && products?.items[0]?.stocks[0];
  const randomNum = () => products?.items && Math.floor(Math.random() * 4);
  const dataForChart = () =>
    products?.items && products?.items?.slice(1, randomNum() * 10);

  return (
    <div className='main'>
      <div className='cards'>
        {products?.items?.slice(randomNum(), 4).map(({ id, name }) => (
          <Card
            key={id}
            id={id}
            name={name.toLowerCase()}
            price={String(price?.sellPrice?.UZS)}
          />
        ))}
      </div>
      <LineChart width={1000} height={300} data={dataForChart()}>
        <Line type='monotone' dataKey='product' stroke='#8884d8' />
        <CartesianGrid stroke='#ccc' />
        <XAxis dataKey='name' />
        <YAxis />
      </LineChart>
      <h3 className='home-title'>Home</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        aliquid voluptate, repellendus consectetur error autem animi optio. Id
        temporibus voluptates illum quaerat tempore eos sed quos consequatur
      </p>
    </div>
  );
};

export default Home;
