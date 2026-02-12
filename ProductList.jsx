import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import { Link } from 'react-router-dom';

const plants = [
  { id: 1, name: 'Monstera Deliciosa', price: 25, thumbnail: 'https://media.gettyimages.com/id/2200083654/video/monstera-deliciosa-houseplant.jpg?s=640x640&k=20&c=xGL8v-JhyYhWuOOP6CJSCJTbBTia90m7Zu25O2oN9qU=', category: 'Large Leaf Plants' },
  { id: 2, name: 'Fiddle Leaf Fig', price: 30, thumbnail: 'https://www.thespruce.com/thmb/vqAishajnVeRQzoT3ic12SL_VfY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fiddle-leaf-fig-leaves-turning-brown-6503953-hero-0870e689ce8d4582b186cbca2b4eefb6.jpg', category: 'Large Leaf Plants' },
  { id: 3, name: 'Snake Plant', price: 15, thumbnail: 'https://media.post.rvohealth.io/wp-content/uploads/2022/01/snake-plant-detail-732x549-thumbnail.jpg', category: 'Low Light Plants' },
  { id: 4, name: 'Pothos', price: 10, thumbnail: 'https://media.istockphoto.com/id/1276982143/video/watering-an-indoor-houseplant-inside-a-beautiful-new-flat-or-apartment.jpg?s=640x640&k=20&c=PTf9zpO3U21qQ5tWOYD68Ufy2mOu5NGEKceFH54Q7MM=', category: 'Low Light Plants' },
  { id: 5, name: 'Peace Lily', price: 20, thumbnail: 'https://media.istockphoto.com/id/2034399555/video/peace-lily-watering.jpg?s=640x640&k=20&c=jNia0tiZplUG9nEvBMwG_gkbsqyeEMD7f2wyoNNNeys=', category: 'Low Light Plants' },
  { id: 6, name: 'Echeveria', price: 8, thumbnail: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/at%2Fart%2Fdesign%2F2020-05%2Fencyclopedia-of-houseplants%2Fthumbnail%20images%2Fecheveria-53-real_AT-Succulents', category: 'Succulents' },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const categories = [...new Set(plants.map((p) => p.category))];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <Navbar totalQuantity={totalQuantity} />
      {categories.map((cat) => (
        <div key={cat}>
          <h2>{cat}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {plants.filter((p) => p.category === cat).map((plant) => (
              <div key={plant.id} style={{ margin: '20px', textAlign: 'center' }}>
                <img src={plant.thumbnail} alt={plant.name} style={{ width: '150px', height: '150px' }} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={cartItems.some((item) => item.id === plant.id)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Navbar = ({ totalQuantity }) => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', background: '#f0f0f0' }}>
      <Link to="/">Home</Link>
      <Link to="/plants">Plants</Link>
      <Link to="/cart">Cart ({totalQuantity})</Link>
    </nav>
  );
};

export default ProductList;