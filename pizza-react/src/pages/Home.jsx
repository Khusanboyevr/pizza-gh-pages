import React from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';

const Home = ({ addToCart }) => {
  const { t } = useTranslation();

  return (
    <>
      <section className="home-slider owl-carousel img js-fullheight" style={{backgroundImage: "url(images/bg_1.jpg)"}}>
        <div className="slider-item js-fullheight">
          <div className="overlay"></div>
          <div className="container">
            <div className="row slider-text align-items-center js-fullheight" data-scrollax-parent="true">
              <div className="col-md-6 col-sm-12 ftco-animate">
                <span className="subheading">Delicious</span>
                <h1 className="mb-4">{t('home.hero_title')}</h1>
                <p className="mb-4 mb-md-5">{t('home.hero_subtitle')}</p>
                <p>
                  <a href="/order" className="btn btn-primary p-3 px-xl-4 py-xl-3 d-inline-flex align-items-center" style={{borderRadius: '30px', transition: '0.3s', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', gap: '8px'}}>
                    <Icon icon="mdi:cart-outline" fontSize={20} />
                    {t('home.order_now')}
                  </a> 
                  <a href="/menu" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3 ml-2 d-inline-flex align-items-center" style={{borderRadius: '30px', transition: '0.3s', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', gap: '8px'}}>
                    <Icon icon="mdi:format-list-bulleted" fontSize={20} />
                    {t('home.view_menu')}
                  </a>
                </p>
              </div>
              <div className="col-md-6 ftco-animate">
                <img src="images/bg_1.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="slider-item js-fullheight">
          <div className="overlay"></div>
          <div className="container">
            <div className="row slider-text align-items-center js-fullheight" data-scrollax-parent="true">
              <div className="col-md-6 col-sm-12 order-md-last ftco-animate">
                <span className="subheading">Crunchy</span>
                <h1 className="mb-4">{t('home.hero_title')}</h1>
                <p className="mb-4 mb-md-5">{t('home.hero_subtitle')}</p>
                <p>
                  <a href="/order" className="btn btn-primary p-3 px-xl-4 py-xl-3 d-inline-flex align-items-center" style={{borderRadius: '30px', transition: '0.3s', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', gap: '8px'}}>
                    <Icon icon="mdi:cart-outline" fontSize={20} />
                    {t('home.order_now')}
                  </a> 
                  <a href="/menu" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3 ml-2 d-inline-flex align-items-center" style={{borderRadius: '30px', transition: '0.3s', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', gap: '8px'}}>
                    <Icon icon="mdi:format-list-bulleted" fontSize={20} />
                    {t('home.view_menu')}
                  </a>
                </p>
              </div>
              <div className="col-md-6 ftco-animate">
                <img src="images/bg_2.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="slider-item js-fullheight" style={{backgroundImage: "url(images/bg_3.jpg)"}}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row slider-text justify-content-center align-items-center js-fullheight" data-scrollax-parent="true">
              <div className="col-md-7 col-sm-12 text-center ftco-animate">
                <span className="subheading">Welcome</span>
                <h1 className="mb-4">{t('home.hero_title')}</h1>
                <p className="mb-4 mb-md-5">{t('home.hero_subtitle')}</p>
                <p>
                  <a href="/order" className="btn btn-primary p-3 px-xl-4 py-xl-3 d-inline-flex align-items-center" style={{borderRadius: '30px', transition: '0.3s', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', gap: '8px'}}>
                    <Icon icon="mdi:cart-outline" fontSize={20} />
                    {t('home.order_now')}
                  </a> 
                  <a href="/menu" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3 ml-2 d-inline-flex align-items-center" style={{borderRadius: '30px', transition: '0.3s', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', gap: '8px'}}>
                    <Icon icon="mdi:format-list-bulleted" fontSize={20} />
                    {t('home.view_menu')}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Specials Section Removed */}

      {/* Menu items are now in the Menu page as requested */}
    </>
  );
};

export default Home;
