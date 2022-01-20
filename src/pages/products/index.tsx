import { useDispatch, useSelector } from 'react-redux';
import products from '@/assets/dummy/products';
import Card from '@/components/templates/Card';
import Hero from '@/components/templates/Hero';
import { addToCart } from '@/redux/cartSlice';
import type { Item } from '@/interfaces';
import { RootState } from '@/redux/store';

const Products = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.app.cart);

  const onAddToCart = (item: Item) => {
    if (item.id && cart) {
      const currentCartItem = cart.find((val) => val.id === item.id);

      if (currentCartItem?.id) {
        // adds quantity
        const value = JSON.parse(JSON.stringify(currentCartItem));
        const existingItem = cart.filter((val) => val.id !== item.id);
        value.quantity = currentCartItem.quantity + 1;
        dispatch(addToCart([...existingItem, { ...value }]));
      } else {
        // adds new product to cart
        dispatch(addToCart([...cart, { ...item, quantity: 1 }]));
      }
    }
  };

  return (
    <div>
      <Hero />
      <div className="grid grid-cols-1 px-4 sm:px-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-auto my-8">
        {products.map((item) => (
          <Card
            itemName={item.display_name}
            brand={item.brand}
            price={item.price}
            category={item.category}
            image="https://images.deliveryhero.io/image/fd-PH/NV/products/8fddddb732185054d2a067d185dc406a31af0984.jpg?height=300"
            onClick={() => onAddToCart(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
