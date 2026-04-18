import React from 'react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="ftco-section mt-5">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section ftco-animate text-center">
            <h2 className="mb-4" style={{textTransform: 'uppercase', letterSpacing: '2px'}}>{t('services.title')}</h2>
            <p style={{opacity: '0.6'}}>{t('services.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
