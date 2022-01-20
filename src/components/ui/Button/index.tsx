import { ReactComponent as Cart } from '@/assets/svg/cart.svg';

export type ButtonProps = {
  className?: string;
  label?: string;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset' | undefined;
  bubbleLabel?: string | number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ className, label, style, type = 'button', bubbleLabel = 1, onClick }: ButtonProps) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={`${className} hover:bg-opacity-70`} style={style} type={type} onClick={onClick}>
      {label || (
        <div className="flex relative">
          <Cart className="icon text-2xl text-white" />
          {bubbleLabel !== 0 && (
            <div className="w-4 absolute left-5 bg-red-600 rounded-full text-xs font-body text-white">
              {bubbleLabel}
            </div>
          )}
        </div>
      )}
    </button>
  );
};

export default Button;
