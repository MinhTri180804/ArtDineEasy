import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownIcon, UserIcon } from '../../../../assets/icons';
import flagUS from '../../../../assets/images/FlagUS.svg';
import flagVN from '../../../../assets/images/FlagVN.svg';
import logo from '../../../../assets/images/logo.svg';
import OverlayComponent from '../../../../components/Overlay';
import Dropdown from '../../../../components/commons/Dropdown';
import DropdownChildren from '../../../../components/commons/Dropdown/Partials/DropdownChildren';
import { IDropdownItem } from '../../../../types/components/DropdownItem';
import { ROUTES_PATH } from '../../../../utils/constant';
import './styles.scss';
import LoginModal from '../../../../components/Modals/Auth/Login';

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

  const [isShowOverlay, setIsShowOverlay] = useState(false);
  const [contentOverlay, setContentOverlay] = useState<React.ReactNode | null>(
    null
  );
  const headerRef = useRef<HTMLHeadElement>(null);

  document.addEventListener('scroll', () => {
    const header = headerRef.current;
    if (header) {
      if (window.scrollY > 0) {
        header.classList.add('header__scroll');
      } else {
        header.classList.remove('header__scroll');
      }
    }
  });

  const handlerSelectLanguage = (value: string | number) => {
    console.log('language: ', value);
  };

  const handlerSelectAccount = (value: string | number) => {
    if (value !== 'login' && value !== 'register') return null;

    if (value === 'login') {
      setIsShowOverlay(true);
      setContentOverlay(<LoginModal onClose={() => setIsShowOverlay(false)} />);
    }

    if (value === 'register') {
      setIsShowOverlay(true);
      setContentOverlay(<div>Register</div>);
    }
  };

  return (
    <header ref={headerRef}>
      <div className="container">
        <Link to={ROUTES_PATH.DEFAULT} className="header__logo">
          <img src={logo} alt="art dine easy" />
        </Link>

        <div className="header__actions">
          <div className="header__actions-language">
            <Dropdown
              title="Tiếng Việt"
              IconLeft={<ArrowDownIcon strokeColor="#000" />}
              ImageRight={flagVN}
            >
              {mockLanguages.map((item, index) => (
                <DropdownChildren
                  key={index}
                  itemData={item}
                  handleSelect={handlerSelectLanguage}
                />
              ))}
            </Dropdown>
          </div>

          <div className="header__actions-account">
            <Dropdown title="Đăng nhập / Đăng ký" ImageRight={UserIcon}>
              {mockAuth.map((item, index) => (
                <DropdownChildren
                  key={index}
                  itemData={item}
                  handleSelect={handlerSelectAccount}
                />
              ))}
            </Dropdown>
          </div>
        </div>
      </div>

      <OverlayComponent
        onClose={() => setIsShowOverlay(false)}
        open={isShowOverlay}
      >
        {contentOverlay}
      </OverlayComponent>
    </header>
  );
};

export { HeaderComponent };
