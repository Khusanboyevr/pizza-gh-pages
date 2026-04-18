import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="ftco-footer ftco-section img" style={{padding: '3em 0'}}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row mb-2 justify-content-center align-items-center">
          <div className="col-md-3 text-center d-flex align-items-center justify-content-center px-4" style={{borderRight: '1px solid rgba(255,255,255,0.1)'}}>
            <div className="contact-info">
              <span className="icon icon-map-marker" style={{color: '#fac564', fontSize: '18px', display: 'inline-block', marginRight: '10px'}}></span>
              <span className="text" style={{fontSize: '12px', color: '#fff', opacity: '0.8'}}>203 Fake St. San Francisco, CA</span>
            </div>
          </div>

          <div className="col-md-3 text-center d-flex align-items-center justify-content-center px-4" style={{borderRight: '1px solid rgba(255,255,255,0.1)'}}>
            <div className="contact-info">
              <a href="tel:+23923929210" style={{color: 'inherit', textDecoration: 'none'}}>
                <span className="icon icon-phone" style={{color: '#fac564', fontSize: '18px', display: 'inline-block', marginRight: '10px'}}></span>
                <span className="text" style={{fontSize: '13px', color: '#fff', fontWeight: 'bold'}}>+2 392 3929 210</span>
              </a>
            </div>
          </div>

          <div className="col-md-3 text-center d-flex align-items-center justify-content-center px-4">
            <div className="contact-info">
              <a href="https://t.me/yourtelegram" style={{color: 'inherit', textDecoration: 'none'}}>
                <span className="icon icon-telegram" style={{color: '#fac564', fontSize: '18px', display: 'inline-block', marginRight: '10px'}}></span>
                <span className="text" style={{fontSize: '13px', color: '#fff', fontWeight: 'bold'}}>{t('footer.telegram')}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <div style={{width: '30px', height: '1px', background: 'rgba(255,255,255,0.1)', margin: '15px auto'}}></div>
            <ul className="ftco-footer-social list-unstyled mb-2" style={{display: 'flex', justifyContent: 'center', gap: '20px'}}>
              <li><a href="#" style={{fontSize: '16px', color: '#fff', opacity: '0.6'}}><span className="icon-twitter"></span></a></li>
              <li><a href="#" style={{fontSize: '16px', color: '#fff', opacity: '0.6'}}><span className="icon-facebook"></span></a></li>
              <li><a href="#" style={{fontSize: '16px', color: '#fff', opacity: '0.6'}}><span className="icon-instagram"></span></a></li>
            </ul>
            <p style={{fontSize: '11px', opacity: '0.5', marginBottom: '0'}}>
              &copy;{new Date().getFullYear()} {t('footer.all_rights_reserved')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
