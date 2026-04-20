import React from 'react';
import style from './Tours.module.css';

// Выносим функцию наружу, чтобы она была доступна компоненту
const getBadgeClass = (badge) => {
    switch (badge) {
        case 'ХИТ': return style.badgeHit;
        case 'АКЦИЯ': return style.badgeSale;
        case 'ЛУЧШАЯ ЦЕНА': return style.badgeBest;
        case 'ИСТОРИЯ': return style.badgeHistory;
        default: return style.badgeDefault;
    }
};

const Tours = ({ items = [] }) => {
    return (
        <section className={style.toursSection}>
            <div className={style.header}>
                <h2>Лучшие туры</h2>
                <div className={style.tabs}>
                    <button className={`${style.tab} ${style.active}`}>Однодневные</button>
                    <button className={style.tab}>Многодневные</button>
                </div>
            </div>

            <div className={style.grid}>
                {items.map((tour) => (
                    <div key={tour.id} className={style.card}>
                        <div className={style.imageBlock} style={{ backgroundImage: `url(${tour.img})` }}>
                            {tour.badge && (
                                <span className={`${style.badge} ${getBadgeClass(tour.badge)}`}>
                                    {tour.badge}
                                </span>
                            )}
                        </div>
                        
                        <div className={style.content}>
                            <h3>{tour.title}</h3>
                            <p className={style.subtitle}>{tour.subtitle}</p>
                            
                            <div className={style.info}>
                                <span>Средняя сложность</span>
                                <span>8 дней / 7 ночей</span>
                            </div>

                            <div className={style.priceBlock}>
                                <span className={style.currentPrice}>{tour.price?.toLocaleString()} Сом</span>
                                {tour.oldPrice && (
                                    <span className={style.oldPrice}>{tour.oldPrice?.toLocaleString()} Сом</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className={style.showAll}>Все туры</button>
        </section>
    );
};

export default Tours;
