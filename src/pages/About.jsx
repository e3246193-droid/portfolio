import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="about-title">О БРЕНДЕ <span>ENO.MONO</span></h1>
        
        <p className="about-text">
          <strong>ENO MONO</strong> — это не просто магазин одежды, а целый мир уличного стиля и концептуальной моды, созданный для тех, кто ценит оверсайз крой и свободу самовыражения. Наш бренд объединяет в себе эстетику аниме, дрип-культуру и современные streetwear-тенденции.
        </p>
        
        <p className="about-text">
          Главная цель ENO MONO — предоставить стильную, качественную и эксклюзивную одежду по разумным ценам. В наших коллекциях представлены худи, футболки, свитшоты и аксессуары, созданные как для повседневной носки, так и для ярких образов.
        </p>

        <div className="about-features">
          <div className="feature-box">
            <h5>Oversize & Streetwear</h5>
            <p>Уникальные свободные фасоны, премиальные ткани и яркая аниме-эстетика.</p>
          </div>
          <div className="feature-box">
            <h5>Быстрая Доставка</h5>
            <p>Отправляем заказы по всему Бишкеку и во все 7 областей Кыргызстана.</p>
          </div>
          <div className="feature-box">
            <h5>Удобная Оплата</h5>
            <p>Принимаем О!Деньги, MBANK и карты VISA для максимального комфорта.</p>
          </div>
          <div className="feature-box">
            <h5>Онлайн-Консультации</h5>
            <p>Поможем точно подобрать размер и составить идеальный оверсайз-образ.</p>
          </div>
        </div>

        <div style={{ marginTop: '30px' }}>
          <Link to="/" className="back-btn">← НА ГЛАВНУЮ К КАТАЛОГУ</Link>
        </div>
      </div>
    </div>
  );
}

export default About;