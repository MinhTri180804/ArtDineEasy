import { Link } from 'react-router-dom';
import './styles.scss';

interface IFooterAuthModal {
  staticContent?: {
    content: string;
  };

  redirectContent?: {
    contentNormal: string;
    contentLink: string;
    redirectPath: string;
  };

  actionContent?: {
    contentNormal: string;
    contentTarget: string;
    handleAction?: () => void;
  };
}

const FooterAuthModal = ({
  staticContent,
  redirectContent,
  actionContent,
}: IFooterAuthModal) => {
  if (!staticContent && !redirectContent && !actionContent) {
    return null;
  }

  if (staticContent) {
    return (
      <div className="footer__auth-modal">
        <p>{staticContent.content}</p>
      </div>
    );
  }

  if (redirectContent) {
    const { contentNormal, contentLink, redirectPath } = redirectContent;
    return (
      <div className="footer__auth-modal">
        <div className="footer__auth-modal--content">
          {contentNormal}
          {contentLink && redirectPath && (
            <Link to={redirectPath}>{contentLink}</Link>
          )}
        </div>
      </div>
    );
  }

  if (!actionContent) {
    return null;
  }

  const { contentNormal, contentTarget, handleAction } = actionContent;

  return (
    <div className="footer__auth-modal">
      <div className="footer__auth-modal--content">
        {contentNormal}
        {contentTarget && typeof handleAction === 'function' && (
          <div onClick={handleAction}>{contentTarget}</div>
        )}
      </div>
    </div>
  );
};

export { FooterAuthModal };
