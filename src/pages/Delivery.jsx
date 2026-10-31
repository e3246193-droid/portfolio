import React from 'react';
import { Link } from 'react-router-dom';

function Delivery() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="about-title">ДОСТАВКА И ОПЛАТА <span>ENO.MONO</span></h1>
        
        <p className="about-text">
          Бренд <strong>ENO MONO</strong> предлагает быструю и удобную доставку оверсайз уличной одежды по Бишкеку и всем регионам Кыргызстана.
        </p>

        <div className="about-features" style={{ gridTemplateColumns: '1fr', gap: '15px' }}>
          <div className="feature-box">
            <h5>Доставка по г. Бишкек</h5>
            <p>Стоимость обычной доставки от 180 сом. Доставка с примеркой (до 5 вещей) — от 350 сом. Отправка в день заказа!</p>
          </div>

          <div className="feature-box">
            <h5>Доставка в регионы КР</h5>
            <p>Отправляем во все 7 областей (Чуй, Ош, Жалал-Абад, Иссык-Куль, Талас, Нарын, Баткен). Стоимость от 250 до 350 сом.</p>
          </div>

          <div className="feature-box">
            <h5>Контакты и Шоу-рум</h5>
            <ul className="contact-list">
              <li><strong>Адрес:</strong> г. Бишкек, ул. Турусбекова 31-100</li>
              <li><strong>Телефон:</strong> +996 501 878 529</li>
              <li><strong>График:</strong> ВТ–ПТ: 14:00–19:00 | СБ–ВС: 12:00–17:00 (ПН — выходной)</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '30px' }}>
          <Link to="/" className="back-btn">← ВЕРНУТЬСЯ В КАТАЛОГ</Link>
        </div>
      </div>
    </div>
  );
}

export default Delivery;