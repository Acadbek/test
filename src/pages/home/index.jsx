import { useContext } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ProductContext } from '../../context/product-controls';
import Card from '../../components/statistics-card';
import './styles.css';

const Home = () => {
  const { products } = useContext(ProductContext);
  const price = products?.items && products?.items[0]?.stocks[0];
  const randomNum = () => products?.items && Math.floor(Math.random() * 4);
  const data1 = [
    { name: 'Shirt L', uv: 400, pv: 2400, amt: 3400 },
    { name: 'Shoes', uv: 500, pv: 2400, amt: 1400 },
    { name: 'T-Shirt', uv: 500, pv: 2400, amt: 2400 },
    { name: 'Jacket', uv: 440, pv: 2400, amt: 2400 },
    { name: 'Sport', uv: 407, pv: 2400, amt: 2400 },
    { name: 'Ic', uv: 440, pv: 2400, amt: 2400 },
  ];
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
      <LineChart width={600} height={300} data={data1}>
        <Line type='monotone' dataKey='uv' stroke='#8884d8' />
        <CartesianGrid stroke='#ccc' />
        <XAxis dataKey='name' />
        <YAxis />
      </LineChart>
      Home
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        aliquid voluptate, repellendus consectetur error autem animi optio. Id
        temporibus voluptates illum quaerat tempore eos sed quos consequatur
        facere soluta expedita, voluptatum iure veniam sapiente officia delectus
        officiis fugit, minus rerum saepe nisi! Omnis incidunt totam eligendi,
        impedit ipsum quia eius vitae eveniet facere. Velit pariatur
        exercitationem, explicabo facilis saepe sequi porro tempora. Vero,
        doloribus dignissimos esse, voluptate quis deleniti voluptatem,
        blanditiis dolore ut error velit ratione quisquam sit libero. Sunt,
        sequi enim animi commodi maxime iusto deleniti voluptas doloremque
        placeat autem consequatur veniam sint sit voluptatem molestias rem
        labore ea tenetur, unde a architecto, dolores aliquam? Natus magnam fuga
        reiciendis, dolores velit earum excepturi eligendi itaque, labore enim
        dicta quidem eaque quasi, eum inventore veniam? Vitae totam iusto minima
        hic provident. Voluptatum possimus vitae eius cum laboriosam vel eveniet
        eum dolore officia, quia blanditiis? Ad cupiditate praesentium
        laboriosam earum, maiores voluptatem, voluptas inventore quas
        consectetur corporis rem qui suscipit sed doloribus. Consectetur itaque
        iste aut sapiente natus, dolorem quam atque optio aspernatur. Voluptate
        iusto, asperiores mollitia consequatur corrupti itaque nulla quaerat
        facere libero. Sit vero odio iste, neque accusamus expedita? In,
        dolores, dolore eligendi vero praesentium, sapiente asperiores quisquam
        dignissimos explicabo veniam nobis laudantium quae repudiandae hic
        reiciendis et mollitia offic psum dolor sit amet consectetur adipisicing
        elit. Inventore aliquid voluptate, repellendus consectetur error autem
        animi optio. Id temporibus voluptates illum quaerat tempore eos sed quos
        consequatur facere soluta expedita, voluptatum iure veniam sapiente
        officia delectus officiis fugit, minus rerum saepe nisi! Omnis incidunt
        totam eligendi, impedit ipsum quia eius vitae eveniet facere. Velit
        pariatur exercitationem, explicabo facilis saepe sequi porro tempora.
        Vero, doloribus dignissimos esse, voluptate quis deleniti voluptatem,
        blanditiis dolore ut error velit ratione quisquam sit libero. Sunt,
        sequi enim animi commodi maxime iusto deleniti voluptas doloremque
        placeat autem consequatur veniam sint sit voluptatem molestias rem
        labore ea tenetur, unde a architecto, dolores aliquam? Natus magnam fuga
        reiciendis, dolores velit earum excepturi eligendi itaque, labore enim
        dicta quidem eaque quasi, eum inventore veniam? Vitae totam iusto minima
        hic provident. Voluptatum possimus vitae eius cum laboriosam vel eveniet
        eum dolore officia, quia blanditiis? Ad cupiditate praesentium
        laboriosam earum, maiores voluptatem, voluptas inventore quas
        consectetur corporis rem qui suscipit sed doloribus. Consectetur itaque
        iste aut sapiente natus, dolorem quam atque optio aspernatur. Voluptate
        iusto, asperiores mollitia consequatur corrupti itaque nulla quaerat
        facere libero. Sit vero odio iste, neque accusamus expedita? In,
        dolores, dolore eligendi vero praesentium, sapiente asperiores quisquam
        dignissimos explicabo veniam nobis laudantium quae repudiandae hic
        reiciendis et mollitia officia consequuntur. Alias atque sed molestias
        maiores officia voluptates repellat assumenda voluptate suscipit sequi
        animi autem deleniti dolorem dicta fugiat ipsum, quia illum maxime
        quasi. Est necessitatibus temporibus ipsa sequi, hic eius. Culpa magnam
        ipsam soluta enim veritatis perferendis, ullam harum provident possimus
        vel magni cum vitae aliquid voluptatum accusantium corrupti, laudantium
        qui quo tempore dolorem eaque sunt, at ab obcaecati. In facilis
        consectetur porro laboriosam odio ex culpa laudantium
      </p>
    </div>
  );
};

export default Home;
