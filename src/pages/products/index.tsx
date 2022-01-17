import products from '@/assets/dummy/products';
import Card from '@/components/templates/Card';
import Hero from '@/components/templates/Hero';

const Products = () => {
  return (
    <div>
      <Hero />
      <div className="grid grid-cols-1 px-4 sm:px-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-auto my-8">
        {products.map((item) => (
          <Card itemName={item.display_name} price={item.price} image="https://picsum.photos/300" />
        ))}
      </div>
    </div>
  );
};

export default Products;
