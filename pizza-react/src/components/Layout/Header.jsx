import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';

const Header = ({ cartCount }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container">
          <Link className="navbar-brand" to="/"><span className="flaticon-pizza-1 mr-1"></span>Pizza<br/><small>Delicous</small></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> {t('nav.menu')}
          </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto align-items-center">
            <li className="nav-item"><Link to="/" className="nav-link">{t('nav.home')}</Link></li>
            <li className="nav-item"><Link to="/menu" className="nav-link">{t('nav.menu')}</Link></li>
            <li className="nav-item"><Link to="/order" className="nav-link d-flex align-items-center gap-2">
              <Icon icon="mdi:cart-outline" fontSize={20} />
              {t('nav.order')}
              {cartCount > 0 && (
                <span style={{
                  background: '#fac564', 
                  color: '#000', 
                  borderRadius: '50%', 
                  width: '22px', 
                  height: '22px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '12px', 
                  fontWeight: 'bold',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                }}>
                  {cartCount}
                </span>
              )}
            </Link></li>
            <li className="nav-item ml-lg-3">
              <button 
                onClick={() => changeLanguage(i18n.language === 'uz' ? 'ru' : 'uz')} 
                className="btn btn-outline-primary"
                style={{
                  fontSize: '12px', 
                  padding: '5px 15px', 
                  borderRadius: '30px',
                  color: '#fac564', 
                  borderColor: '#fac564', 
                  background: 'transparent',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <span style={{opacity: i18n.language === 'uz' ? '1' : '0.4'}}>UZ</span>
                <span style={{opacity: '0.4'}}>|</span>
                <span style={{opacity: i18n.language === 'ru' ? '1' : '0.4'}}>RU</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
