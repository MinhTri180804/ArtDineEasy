import SpinnerLoading from '../SpinnerLoading';
import './styles.scss';

interface IButtonComponent {
  type?: 'primary' | 'secondary';
  content?: string;
  size?: '40' | '32';
  Icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}
const ButtonComponent = ({
  content = 'Button',
  type = 'primary',
  size = '40',
  Icon,
  iconPosition,
  disabled = false,
  onClick,
  loading = false,
}: IButtonComponent) => {
  return (
    <button
      disabled={disabled || loading}
      className="button__component"
      data-type={type}
      data-size={size}
      data-iconposition={iconPosition ?? 'none'}
      data-icon={Icon ? 'true' : 'false'}
      onClick={onClick}
    >
      {Icon && iconPosition && !loading && (
        <div className="button__component-icon">{Icon}</div>
      )}

      <div className="button__component-content">
        {loading ? <SpinnerLoading /> : content}
      </div>
    </button>
  );
};

export { ButtonComponent };
