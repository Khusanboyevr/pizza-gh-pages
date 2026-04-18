import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uz: {
        translation: {
          nav: {
            home: 'Bosh sahifa',
            menu: 'Menyu',
            order: 'Buyurtma',
            services: 'Xizmatlar',
            contact: 'Kontakt'
          },
          home: {
            hero_title: 'Eng mazali pizza',
            hero_subtitle: 'Italiya an\'analari asosida',
            order_now: 'Buyurtma berish',
            view_menu: 'Menyuni ko\'rish'
          },
          menu: {
            title: 'Issiq Taomlar',
            description: 'Eng sara masalliqlardan tayyorlangan issiq va mazali pitsalarimizni tatib ko\'ring.',
            add_to_cart: 'Savatga qo\'shish',
            pizza_name: 'Italiya Pitsasi'
          },
          services: {
            title: 'Bizning Xizmatlar',
            description: 'Sizga eng yuqori darajadagi xizmatni taklif etamiz.'
          },
          contact: {
            title: 'Biz bilan bog\'laning',
            address: '203 Fake St. San Francisco, CA',
            phone: '+2 392 3929 210',
            telegram: 'Telegram'
          },
          order: {
            title: 'Buyurtma berish',
            name: 'Ismingiz',
            phone: 'Telefon raqamingiz',
            table_number: 'Stol raqami',
            message: 'Qo\'shimcha izoh',
            submit: 'Buyurtmani yuborish',
            success: 'Buyurtmangiz qabul qilindi!',
            empty_cart: 'Savatchangiz bo\'sh',
            empty_cart_hint: 'Buyurtma berish uchun avval menyudan biror nima tanlang.',
            go_to_order: 'Buyurtma qilishga o\'tish'
          },
          footer: {
            contact_us: 'Biz bilan aloqa',
            telegram: 'Telegram',
            all_rights_reserved: 'Barcha huquqlar himoyalangan'
          }
        }
      },
      ru: {
        translation: {
          nav: {
            home: 'Главная',
            menu: 'Меню',
            order: 'Заказать',
            services: 'Услуги',
            contact: 'Контакты'
          },
          home: {
            hero_title: 'Самая вкусная пицца',
            hero_subtitle: 'На основе итальянских традиций',
            order_now: 'Заказать сейчас',
            view_menu: 'Посмотреть меню'
          },
          menu: {
            title: 'Горячие Блюда',
            description: 'Попробуйте наши горячие и вкусные пиццы, приготовленные из лучших ингредиентов.',
            add_to_cart: 'В корзину',
            pizza_name: 'Итальянская Пицца'
          },
          services: {
            title: 'Наши Услуги',
            description: 'Мы предлагаем вам сервис самого высокого уровня.'
          },
          contact: {
            title: 'Свяжитесь с нами',
            address: '203 Fake St. San Francisco, CA',
            phone: '+2 392 3929 210',
            telegram: 'Telegram'
          },
          order: {
            title: 'Оформить заказ',
            name: 'Ваше имя',
            phone: 'Ваш номер телефона',
            table_number: 'Номер стола',
            message: 'Дополнительный комментарий',
            submit: 'Отправить заказ',
            success: 'Ваш заказ принят!',
            empty_cart: 'Ваша корзина пуста',
            empty_cart_hint: 'Пожалуйста, выберите что-нибудь из меню перед оформлением заказа.',
            go_to_order: 'Перейти к заказу'
          },
          footer: {
            contact_us: 'Связаться с нами',
            telegram: 'Telegram',
            all_rights_reserved: 'Все права защищены'
          }
        }
      }
    },
    fallbackLng: 'uz',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
