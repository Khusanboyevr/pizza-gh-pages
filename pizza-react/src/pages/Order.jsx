import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Order = ({ cart, addToCart, removeFromCart }) => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // PLACEHOLDERS - User will replace these
  const TELEGRAM_BOT_TOKEN = '7857475586:AAEsWAUq1_RZE2Ko3UfARz-yf7oUCgKkumI';
  const TELEGRAM_CHAT_ID = '6112428725';

  const cartCount = cart ? cart.length : 0;

  // Group items by ID
  const groupedCart = cart.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = { ...item, quantity: 0 };
    }
    acc[item.id].quantity += 1;
    return acc;
  }, {});

  const groupedItems = Object.values(groupedCart);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toLocaleString('uz-UZ');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setLoading(true);

    const formData = new FormData(e.target);
    const orderData = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      table: formData.get('table'),
      message: formData.get('message'),
    };

    // Format the message for Telegram
    let message = `<b>🍕 Yangi Buyurtma!</b>\n\n`;
    message += `<b>👤 Mijoz:</b> ${orderData.name}\n`;
    message += `<b>📞 Tel:</b> ${orderData.phone || 'Ko\'rsatilmadi'}\n`;
    message += `<b>🔢 Stol:</b> ${orderData.table}\n`;
    if (orderData.message) message += `<b>💬 Izoh:</b> ${orderData.message}\n`;
    message += `\n<b>🛒 Taomlar:</b>\n`;
    
    groupedItems.forEach(item => {
      message += `- ${item.name} x ${item.quantity} (${(item.price * item.quantity).toLocaleString('uz-UZ')} so'm)\n`;
    });
    
    message += `\n<b>💰 JAMI: ${totalPrice} so'm</b>`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Xatolik yuz berdi. Iltimos qaytadan urinib ko\'ring.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Tarmoq xatosi. Iltimos internetingizni tekshiring.');
    } finally {
      setLoading(false);
    }
  };


  if (cartCount === 0 && !submitted) {
    return (
      <section className="ftco-section mt-5">
        <div className="container text-center py-5">
          <Icon icon="mdi:cart-off" fontSize={80} style={{color: 'rgba(255,255,255,0.1)'}} className="mb-4" />
          <h2 className="mb-4">{t('order.empty_cart')}</h2>
          <p className="mb-4" style={{opacity: '0.6'}}>{t('order.empty_cart_hint')}</p>
          <Link to="/menu" className="btn btn-primary py-3 px-5" style={{borderRadius: '30px', fontWeight: 'bold'}}>
            {t('nav.menu')}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="ftco-section mt-5">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section ftco-animate text-center">
            <h2 className="mb-4" style={{textTransform: 'uppercase', letterSpacing: '2px'}}>{t('order.title')}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            {submitted ? (
              <div className="alert alert-success text-center p-5" style={{background: 'rgba(250, 197, 100, 0.1)', border: '1px solid #fac564', color: '#fac564'}}>
                <Icon icon="mdi:check-circle-outline" fontSize={60} className="mb-3" />
                <h3>{t('order.success')}</h3>
                <Link to="/" className="btn btn-primary mt-4" style={{borderRadius: '30px'}}>{t('nav.home')}</Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form p-4 p-md-5" style={{background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)'}}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{color: '#fac564'}}>{t('order.name')}</label>
                      <input type="text" name="name" className="form-control" style={{background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff'}} required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{color: '#fac564'}}>{t('order.phone')}</label>
                      <input type="tel" name="phone" className="form-control" style={{background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff'}} />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label style={{color: '#fac564'}}>{t('order.table_number')}</label>
                  <input type="text" name="table" className="form-control" style={{background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff'}} required />
                </div>
                <div className="form-group">
                  <label style={{color: '#fac564'}}>{t('order.message')}</label>
                  <textarea name="message" cols="30" rows="4" className="form-control" style={{background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff'}}></textarea>
                </div>
                <div className="form-group text-center mt-4">
                  <button type="submit" disabled={loading} className="btn btn-primary py-3 px-5 d-inline-flex align-items-center" style={{borderRadius: '30px', fontWeight: 'bold', gap: '10px', opacity: loading ? 0.7 : 1}}>
                    {loading ? (
                      <Icon icon="mdi:loading" className="mdi-spin" fontSize={20} />
                    ) : (
                      <Icon icon="mdi:send" fontSize={20} />
                    )}
                    {loading ? 'Yuborilmoqda...' : t('order.submit')}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          <div className="col-md-5 mt-5 mt-md-0">
            <div className="p-4" style={{background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)'}}>
              <h3 className="mb-4" style={{fontSize: '20px', color: '#fac564'}}>{t('nav.menu')}</h3>
              <div className="cart-list mb-4">
                {groupedItems.map((item, index) => (
                  <div key={index} className="d-flex justify-content-between align-items-center mb-3 p-2" style={{background: 'rgba(255,255,255,0.02)', borderRadius: '10px'}}>
                    <div className="d-flex align-items-center gap-3">
                      <div style={{width: '50px', height: '50px', borderRadius: '50%', backgroundImage: `url(images/pizza-${item.id}.jpg)`, backgroundSize: 'cover'}}></div>
                      <div className="d-flex flex-column">
                        <span style={{fontSize: '14px', fontWeight: 'bold'}}>{item.name}</span>
                        <span style={{color: '#fac564', fontSize: '12px'}}>{item.price.toLocaleString('uz-UZ')} so'm</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2" style={{background: 'rgba(255,255,255,0.08)', borderRadius: '30px', padding: '5px 12px'}}>
                      <button onClick={() => removeFromCart(item.id)} className="btn btn-link p-0 d-flex align-items-center justify-content-center" style={{color: '#fac564', textDecoration: 'none', transition: '0.3s'}}>
                        <Icon icon="mdi:minus" fontSize={20} />
                      </button>
                      <span style={{fontSize: '15px', fontWeight: 'bold', minWidth: '25px', textAlign: 'center', color: '#fff'}}>{item.quantity}</span>
                      <button onClick={() => addToCart(item)} className="btn btn-link p-0 d-flex align-items-center justify-content-center" style={{color: '#fac564', textDecoration: 'none', transition: '0.3s'}}>
                        <Icon icon="mdi:plus" fontSize={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <hr style={{borderColor: 'rgba(255,255,255,0.1)'}} />
              <div className="d-flex justify-content-between align-items-center mt-4">
                <span style={{fontSize: '18px', fontWeight: 'bold'}}>JAMI:</span>
                <span style={{fontSize: '22px', fontWeight: 'bold', color: '#fac564'}}>
                  {totalPrice} so'm
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
