import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Menu = ({ addToCart, cartCount }) => {
  const { t } = useTranslation();

  return (
    <section className="ftco-section mt-5">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section ftco-animate text-center">
            <h2 className="mb-4" style={{textTransform: 'uppercase', letterSpacing: '2px'}}>{t('menu.title')}</h2>
            <p style={{opacity: '0.6'}}>{t('menu.description')}</p>
            {cartCount > 0 && (
              <div className="mt-4">
                <Link to="/order" className="btn btn-primary py-3 px-4 d-inline-flex align-items-center" style={{borderRadius: '30px', fontWeight: 'bold', gap: '10px'}}>
                  <Icon icon="mdi:cart-outline" fontSize={22} />
                  {t('order.go_to_order')}
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="col-md-3 text-center ftco-animate mb-5">
              <div className="menu-wrap">
                <a href="#" className="menu-img img mb-4" onClick={(e) => { e.preventDefault(); addToCart({id, name: t('menu.pizza_name'), price: 45000}); }} style={{backgroundImage: `url(images/pizza-${id}.jpg)`, borderRadius: '50%', width: '200px', height: '200px', margin: '0 auto', display: 'block'}}></a>
                <div className="text">
                  <h3 style={{fontSize: '20px', fontWeight: 'bold'}}><a href="#" onClick={(e) => { e.preventDefault(); addToCart({id, name: t('menu.pizza_name'), price: 45000}); }} style={{color: '#fff'}}>{t('menu.pizza_name')}</a></h3>
                  <p style={{fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '15px'}}>{t('menu.description')}</p>
                  <div className="d-flex align-items-center justify-content-center" style={{gap: '15px', marginBottom: '20px'}}>
                    <span className="price" style={{color: '#fac564', fontSize: '20px', fontWeight: 'bold'}}>45,000 so'm</span>
                    <button onClick={() => addToCart({id, name: t('menu.pizza_name'), price: 45000})} className="btn btn-white btn-outline-white d-flex align-items-center justify-content-center" style={{borderRadius: '50%', width: '40px', height: '40px', padding: '0', transition: '0.3s', background: 'transparent'}}>
                      <Icon icon="mdi:cart-outline" fontSize={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
