import styles from "./Hero.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const mockApi = [
    {
        image: "https://too.kg/wp-content/uploads/image_8.jpg",
        title: "Караван-сарай Таш-Рабат",
        description: "Таш-Рабат (также Ташрабат) — это древний караван-сарай, располагающийся на территории Нарынской области, находящийся недалеко от границы с Китаем, одна из ключевых частей древнего Великого Шелкового Пути."
    },
    {
        image: "https://central-asia.live/_next/image?url=https%3A%2F%2Fcentral-asia.live%2Fuploads%2Fburana-tower.jpg&w=3840&q=75",
        title: "Бурана: Минарет, хранящий тайны прошлого Кыргызстана",
        description: "Минарет Бурана, расположенный в Чуйской долине в Кыргызстане, - это древний минарет высотой 25 метров, который сохранился с 11-го века. Считается, что его построили в рамках древнего города Баласагун, который служил столицей Караканидской империи."
    }
]


const Hero = () => {
    // Защита: если данных нет, не рендерим пустые блоки
    if (!mockApi || mockApi.length === 0) return null;

    return (
        <section className={styles.hero}>
            <div className={styles.slider}>
                <Swiper
                    navigation={true}
                    pagination={{ clickable: true }}
                    loop={true}
                    speed={1000}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {mockApi.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div 
                                className={styles.slide} 
                                style={{ backgroundImage: `url(${item.image})` }}
                            >
                                <div className={styles.slideContent}>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                    <button className={styles.moreBtn}>Узнать больше</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className={styles.news}>
                {mockApi.slice(0, 2).map((item, index) => (
                    <div 
                        key={index} 
                        className={styles.newsCard} 
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        <div className={styles.newsOverlay}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hero;



