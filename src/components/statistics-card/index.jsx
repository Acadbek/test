import './style.css';

const Card = ({ name, price, id }) => {
  const setColor = () => (id % 2 === 0 ? 'newColor' : '');
  const slicePrice = (vl) => vl && vl?.slice(0, 3) + 'K';

  return (
    <div
      style={{ backgroundColor: setColor() ? '#3b82f680' : '' }}
      className='card'
    >
      <p className='card-name'>{name}</p>
      <h3 className='price'>{slicePrice(price)}</h3>
    </div>
  );
};

export default Card;
