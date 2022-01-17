import ShoppingCard from '@/components/templates/ShoppingCard';

const ViewCart = () => {
  return (
    <div className="h-full my-4">
      <h2>Shopping Cart</h2>
      <div className="flex flex-col justify-center items-center">
        <ShoppingCard image="https://picsum.photos/100" />

        <ShoppingCard image="https://picsum.photos/100" />

        <ShoppingCard image="https://picsum.photos/100" />

        <ShoppingCard image="https://picsum.photos/100" />

        <ShoppingCard image="https://picsum.photos/100" />

        <ShoppingCard image="https://picsum.photos/100" />

        <ShoppingCard image="https://picsum.photos/100" />
      </div>
    </div>
  );
};

export default ViewCart;
