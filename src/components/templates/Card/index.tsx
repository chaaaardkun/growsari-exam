import Button from '@/components/ui/Button';

type CardProps = {
  itemName: string;
  price: number;
  image: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Card = ({ itemName, price, image, onClick }: CardProps) => {
  return (
    <div className="card flex flex-col">
      <div className="position-relative bg-placeholder">
        <div
          className="h-[18.75rem] bg-gray-300 rounded-md w-full bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <h4 className="font-regular py-2">{itemName}</h4>
      <h3 className="mt-auto text-primary mb-2">P{price}</h3>
      <Button label="Add to Cart" className="bg-secondary p-2 text-white rounded-lg" type="button" onClick={onClick} />
    </div>
  );
};

export default Card;
