import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@/components/ui/Button';
import { ReactComponent as Logo } from '@/assets/svg/logo.svg';
import { RootState } from '@/redux/store';

const Header = () => {
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.app.cart);

  const handlePageChange = () => {
    navigate('/view-cart');
  };

  return (
    <div className="bg-primary py-4 px-8 flex justify-between items-center w-full fixed z-20">
      <button type="button" onClick={() => navigate('/')}>
        <Logo className="icon text-[9rem] !h-12 text-white" />
      </button>
      <Button bubbleLabel={cart?.length} onClick={handlePageChange} />
    </div>
  );
};

export default Header;
