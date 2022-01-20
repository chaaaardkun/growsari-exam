import Button from '@/components/ui/Button';

type CardProps = {
  itemName: string;
  brand: string;
  price: number;
  image: string;
  category: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Card = ({ itemName, brand, price, category, image, onClick }: CardProps) => {
  return (
    <div className="card flex flex-col p-4 text-center hover:shadow-lg rounded-3xl ease-in-out duration-300 pointer">
      <div className="relative">
        <div
          className="h-[16.5rem] rounded-md w-full bg-no-repeat bg-center m-auto transform hover:scale-110 ease-in-out duration-200 relative"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="rounded-tl-lg rounded-bl-lg absolute right-0 bg-secondary px-4">
            <h4 className="text-white">{brand}</h4>
          </div>
        </div>
      </div>
      <h4 className="font-regular py-2">{itemName}</h4>
      <h3 className="mt-auto text-primary mb-2">₱{price.toFixed(2)}</h3>
      <div className="text-white m-auto mb-4 rounded-full px-3 bg-primary">{category}</div>
      <Button
        label="Add to Cart"
        className="bg-secondary p-2 text-white rounded-lg rounded-tr-3xl rounded-bl-3xl ease-in-out duration-300"
        type="button"
        onClick={onClick}
      />
    </div>
  );
};

export default Card;
