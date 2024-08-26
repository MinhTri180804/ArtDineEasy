import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import authApi from '../../../../Api/Auth/authApi';
import { ArrowDownIcon, UserIcon } from '../../../../assets/icons';
import flagUS from '../../../../assets/images/FlagUS.svg';
import flagVN from '../../../../assets/images/FlagVN.svg';
import logo from '../../../../assets/images/logo.svg';
import LoginModal from '../../../../components/Modals/Auth/Login';
import RegisterModal from '../../../../components/Modals/Auth/Register';
import OverlayComponent from '../../../../components/Overlay';
import Dropdown from '../../../../components/commons/Dropdown';
import DropdownChildren from '../../../../components/commons/Dropdown/Partials/DropdownChildren';
import { IDropdownItem } from '../../../../types/components/DropdownItem';
import { IUserInfoResponse } from '../../../../types/response/UserInfo/userInfoType';
import { ROUTES_PATH } from '../../../../utils/constant';
import './styles.scss';
import OTPRegisterModal from '../../../../components/Modals/Auth/OTPRegister';
import userApi from '../../../../Api/User/userApi';

const HeaderComponent = () => {
  const [isShowOverlay, setIsShowOverlay] = useState(false);
  const [contentOverlay, setContentOverlay] = useState<React.ReactNode | null>(
    null
  );
  const user = JSON.parse(
    localStorage.getItem('userInfo') || 'null'
  ) as IUserInfoResponse | null;

  useEffect(() => {
    // console.log(window.location.href);

    const fetchUserInfo = async () => {
      const authCodeRegex = /code=([^&]+)/;
      const isMatch = window.location.href.match(authCodeRegex);

      if (isMatch) {
        const authCode = isMatch ? isMatch[1] : null;

        const res = await fetch(
          `http://localhost:8081/indentity/auth/outbound/authentication?code=${authCode}`,
          {
            method: 'POST',
          }
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            return data.result;
          });

        const token = await res;
        console.log(token);
        localStorage.setItem('authentication', JSON.stringify(token));

        const resUserInfo = await userApi.getInfo().then((response) => {
          return response.result;
        });

        localStorage.setItem('userInfo', JSON.stringify(resUserInfo));
        window.location.href = 'http://localhost:5173/';

        return;
      }

      return;
    };

    fetchUserInfo();
  }, []);

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

  const dropdownActionAccount: IDropdownItem[] = [
    {
      content: 'Đăng nhập',
      value: 'login',
    },
    {
      content: 'Đăng ký',
      value: 'register',
    },
  ];

  const dropdownOptionAccount: IDropdownItem[] = [
    {
      content: 'Đăng xuất',
      value: 'logout',
    },
  ];

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
    if (value !== 'login' && value !== 'register' && value !== 'logout')
      return null;

    if (value === 'login') {
      setIsShowOverlay(true);
      setContentOverlay(
        <LoginModal
          onClose={() => setIsShowOverlay(false)}
          onChangeModal={changeRegisterModal}
        />
      );
    }

    if (value === 'register') {
      const infoRegister = localStorage.getItem('infoRegister');
      const otp = localStorage.getItem('OTP-code');
      let isCheck = false;
      if (infoRegister && otp) {
        isCheck = true;
      }

      setIsShowOverlay(true);
      if (isCheck) {
        setContentOverlay(
          <OTPRegisterModal onClose={() => setIsShowOverlay(false)} />
        );
        return;
      }
      setContentOverlay(
        <RegisterModal
          onChangeModal={changeLoginModal}
          onClose={() => setIsShowOverlay(false)}
          hasPrevInfo={isCheck}
        />
      );
    }

    if (value === 'logout') {
      toast.promise(
        authApi.logout(
          JSON.parse(localStorage.getItem('authentication') || 'null').token
        ),
        {
          pending: {
            render: () => {
              return 'Đang xử lý...';
            },
          },
          success: {
            render: () => {
              localStorage.removeItem('userInfo');
              localStorage.removeItem('authentication');
              setIsShowOverlay(true);
              setContentOverlay(
                <LoginModal
                  onClose={() => setIsShowOverlay(false)}
                  onChangeModal={changeRegisterModal}
                />
              );
              return 'Đăng xuất thành công';
            },
          },
          error: {
            render: (error) => {
              return `Đăng xuất thất bại: ${error}`;
            },
          },
        }
      );
    }
  };

  function changeLoginModal() {
    setIsShowOverlay(false);
    handlerSelectAccount('login');
  }

  function changeRegisterModal() {
    setIsShowOverlay(false);
    handlerSelectAccount('register');
  }

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

          {!user && (
            <div className="header__actions-account">
              <Dropdown title="Đăng nhập / Đăng ký" ImageRight={UserIcon}>
                {dropdownActionAccount.map((item, index) => (
                  <DropdownChildren
                    key={index}
                    itemData={item}
                    handleSelect={handlerSelectAccount}
                  />
                ))}
              </Dropdown>
            </div>
          )}
          {user && (
            <div className="header__account">
              <Dropdown title={`${user.firstName} ${user.lastName}`}>
                {dropdownOptionAccount.map((item, index) => (
                  <DropdownChildren
                    key={index}
                    itemData={item}
                    handleSelect={handlerSelectAccount}
                  />
                ))}
              </Dropdown>
            </div>
          )}
        </div>
      </div>

      <OverlayComponent
        onClose={() => setIsShowOverlay(false)}
        open={isShowOverlay}
        borderRadius
      >
        {contentOverlay}
      </OverlayComponent>
    </header>
  );
};

export { HeaderComponent };
