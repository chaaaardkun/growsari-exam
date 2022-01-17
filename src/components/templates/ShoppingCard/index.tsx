type ShoppingCardProps = {
  image: string;
};

const ShoppingCard = ({ image }: ShoppingCardProps) => {
  return (
    <div className="my-4 bg-gray-100 rounded-md p-4 max-w-[62.5rem] w-full">
      <div className="w-full flex justify-between items-center">
        <div className="flex">
          <div
            className="h-[6.25rem] w-[6.25rem] bg-gray-300 rounded-md bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="ml-6 flex flex-col justify-center">
            <h5>Sardines</h5>
            <h4>P15.00</h4>
            <p>748485000000</p>
          </div>
        </div>
        <h4>1</h4>
        <h4>P15.00</h4>
      </div>
    </div>
  );
};

export default ShoppingCard;
