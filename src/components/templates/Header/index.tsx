import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';

const Header = () => {
  const navigate = useNavigate();

  const handlePageChange = () => {
    navigate('/view-cart', { replace: true });
  };

  return (
    <div className="bg-primary py-4 px-8 flex justify-between items-center">
      <h1 className="text-white">Samut Sari Mart</h1>
      <Button onClick={handlePageChange} />
    </div>
  );
};

export default Header;
