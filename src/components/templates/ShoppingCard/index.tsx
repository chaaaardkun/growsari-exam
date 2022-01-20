import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { ReactComponent as Add } from '@/assets/svg/ic-add.svg';
import { ReactComponent as Minus } from '@/assets/svg/ic-minus.svg';
import { addToCart } from '@/redux/cartSlice';
import { RootState } from '@/redux/store';

type ShoppingCardProps = {
  itemKey: number;
  name: string;
  price: number;
  barcode: number | string;
  quantity: number;
  image: string;
  key: number;
  emitTotalPrice: (value: number) => void;
};

const ShoppingCard = ({ itemKey, name, price, barcode, quantity, image, key, emitTotalPrice }: ShoppingCardProps) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.app.cart);
  const [total, setTotal] = useState<number>(0);

  const removeItem = () => {
    console.log('remove');
    if (cart && cart[itemKey].id) {
      const cartDetails = JSON.parse(JSON.stringify(cart));
      cartDetails.splice(itemKey, 1);
      dispatch(addToCart([...cartDetails]));
    }
  };

  const setQuantity = (type: 'add' | 'sub') => {
    if (cart && cart[itemKey].id) {
      if (cart[itemKey]?.id) {
        const addItem = () => {
          const itemDetails = JSON.parse(JSON.stringify(cart));
          itemDetails[itemKey].quantity += 1;
          dispatch(addToCart([...itemDetails]));
        };

        const subtractItem = () => {
          const itemDetails = JSON.parse(JSON.stringify(cart));
          itemDetails[itemKey].quantity -= 1;
          dispatch(addToCart([...itemDetails]));
          if (itemDetails[itemKey]?.quantity < 1) {
            removeItem();
          }
        };

        const action = {
          add: addItem,
          sub: subtractItem,
        };

        return action[type]();
      }
    }
    return false;
  };

  useEffect(() => {
    if (cart && cart?.length > 0) {
      let getPrice = 0;
      cart.forEach((item) => {
        getPrice += item.price * item.quantity;
      });

      setTotal(getPrice);
    }
  }, [cart]);

  useEffect(() => {
    emitTotalPrice(total);
  }, [emitTotalPrice, total]);

  return (
    <div key={key} className="my-4 bg-gray-100 rounded-md p-4 max-w-[62.5rem] w-full">
      <div className="w-full flex items-center">
        <div className="flex flex-1">
          <div
            className="h-[6.25rem] w-[6.25rem] bg-gray-300 rounded-md bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="ml-6 flex flex-col justify-center w-72">
            <h5 className="truncate ...">{name}</h5>
            <h4 className="truncate ...">₱{price.toFixed(2)}</h4>
            <p className="truncate ...">{barcode}</p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-1">
          <button type="button" onClick={() => setQuantity('sub')}>
            <Minus className="icon hover:text-secondary" />
          </button>

          <h4 className="mx-5">{quantity}</h4>
          <button type="button" onClick={() => setQuantity('add')}>
            <Add className="icon hover:text-primary" />
          </button>
        </div>
        <h4 className="flex flex-1 justify-center">₱{(price * quantity).toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default ShoppingCard;
