import { useSelector } from 'react-redux';
import { useState } from 'react';
import ShoppingCard from '@/components/templates/ShoppingCard';
import { RootState } from '@/redux/store';
import { ReactComponent as EmptyCart } from '@/assets/svg/empty-cart.svg';
import Button from '@/components/ui/Button';

const ViewCart = () => {
  const [total, setTotal] = useState<number>(0);
  const cart = useSelector((state: RootState) => state.app.cart);

  return (
    <div className="h-full my-4">
      <h2>Shopping Cart</h2>
      <div className="flex flex-col justify-center items-center relative pb-20">
        {cart?.length === 0 ? (
          <div className="flex flex-col justify-center items-center mt-10">
            <EmptyCart className="icon text-9xl text-primary" />
            <h4 className="text-secondary mt-8 h-">There are no orders placed yet.</h4>
          </div>
        ) : (
          <>
            {cart?.map((item, key) => (
              <ShoppingCard
                key={item.id}
                itemKey={key}
                name={item.display_name}
                price={item.price}
                barcode={item.barcode}
                quantity={item.quantity}
                emitTotalPrice={(val) => setTotal(val)}
                image="https://images.deliveryhero.io/image/fd-PH/NV/products/8fddddb732185054d2a067d185dc406a31af0984.jpg?height=300"
              />
            ))}
            <div className="fixed h-28 bottom-0 w-full shadow-inner bg-white flex justify-center items-end flex-col px-8">
              <h5>Delivery Fee: ₱50</h5>
              <h5>Total: ₱{(total + 50).toFixed(2)}</h5>
              <Button
                type="button"
                label="Pay Now"
                className="bg-secondary p-2 text-white rounded-lg rounded-tr-3xl rounded-bl-3xl ease-in-out duration-300"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ViewCart;
