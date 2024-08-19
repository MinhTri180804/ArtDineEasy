import logo from '../../../../assets/images/logo.svg';
import Dropdown from '../../../../components/commons/Dropdown';
import { ArrowDownIcon, UserIcon } from '../../../../assets/icons';
import flagVN from '../../../../assets/images/FlagVN.svg';
import './styles.scss';
import { IDropdownItem } from '../../../../types/components/DropdownItem';
import flagUS from '../../../../assets/images/FlagUS.svg';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from '../../../../utils/constant';

const HeaderComponent = () => {
  const mockLanguages: IDropdownItem[] = [
    {
      ImageRight: flagVN,
      content: 'Tiếng Việt',
      value: 'vi',
    },
    {
      ImageRight: flagUS,
      content: 'English',
      value: 'en',
    },
  ];

  const mockAuth: IDropdownItem[] = [
    {
      content: 'Đăng nhập',
      value: 'login',
    },
    {
      content: 'Đăng ký',
      value: 'register',
    },
  ];

  return (
    <header>
      <div className="container">
        <Link to={ROUTES_PATH.DEFAULT} className="header__logo">
          <img src={logo} alt="art dine easy" />
        </Link>

        <div className="header__actions">
          <div className="header__actions-language">
            <Dropdown
              title="Tiếng Việt"
              IconLeft={ArrowDownIcon}
              ImageRight={flagVN}
              dropdownChildren={mockLanguages}
            />
          </div>

          <div className="header__actions-account">
            <Dropdown
              title="Đăng nhập / Đăng ký"
              ImageRight={UserIcon}
              dropdownChildren={mockAuth}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export { HeaderComponent };
