import './styles.scss';

interface IButtonComponent {
  content?: string;
}
const ButtonComponent = ({ content = 'Button' }: IButtonComponent) => {
  return <button>{content}</button>;
};

export { ButtonComponent };
