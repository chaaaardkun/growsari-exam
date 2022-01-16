import products from '@/assets/dummy/products';

const Products = () => {
  // const [error, setError] = useState(false);

  // const onError = () => {
  //   setError(true);
  // };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap:1 md:gap-8 mx-auto my-8">
      {products.map((item) => (
        <div className="card flex flex-col">
          <div className="position-relative bg-placeholder">
            {/* {!error ? (
              <img src={member.image} alt={member.name} className="h-[17.5rem] w-[18.875rem]" onError={onError} />
            ) : ( */}
            <div className="h-[17.5rem] bg-gray-300 rounded-md w-full" />
            {/* )} */}
          </div>
          <h3 className="py-2">{item.display_name}</h3>
          <p>{item.price}</p>
          <button type="button" className="bg-secondary p-2 text-white rounded-lg">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
