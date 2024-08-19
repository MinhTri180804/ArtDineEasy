import './styles.scss';

interface IButtonComponent {
  type?: 'primary' | 'secondary';
  content?: string;
  size?: '40' | '32';
  Icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
}
const ButtonComponent = ({
  content = 'Button',
  type = 'primary',
  size = '40',
  Icon,
  iconPosition,
  disabled = false,
}: IButtonComponent) => {
  return (
    <button
      disabled={disabled}
      className="button__component"
      data-type={type}
      data-size={size}
      data-iconPosition={iconPosition ?? 'none'}
      data-icon={Icon ? 'true' : 'false'}
    >
      {Icon && iconPosition && (
        <div className="button__component-icon">{Icon}</div>
      )}

      <div className="button__component-content">{content}</div>
    </button>
  );
};

export { ButtonComponent };
