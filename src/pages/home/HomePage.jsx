import { useState } from 'react';
import Hero from '../../components/hero/Hero';
import Filter from '../../components/filter/Filter';
import Tours from '../../components/Tours/Tours';


const ALL_TOURS = [
  {
    id: 1,
    type: "Многодневные",
    title: "Отдых в Чолпон-Ате",
    days: 4, // добавили число
    startDate: "2026-07-19",
    subtitle: "Прогулки на катере и культурная программа",
    img: "https://open.kg/uploads/posts/2018-08/1535625592_screenshot_48.webp",
    level: "Легкая",
    duration: "3 дня / 2 ночи",
    price: "12 000",
    oldPrice: "15 000",
    badge: "ХИТ"
  },
  {
    id: 2,
    type: "Однодневные",
    title: "Тур на Чатыр-Куль",
    days: 3, // добавили число
    startDate: "2026-07-20",
    subtitle: "Выезд к высокогорному озеру и заповедным зонам",
    img: "https://dwc.kg/wp-content/uploads/2023/05/1647363922_10-vsegda-pomnim-com-p-ozero-chatir-kul-foto-11.jpg",
    level: "Средняя",
    duration: "1 день",
    price: "5 000",
    oldPrice: "7 500",
    badge: "ЛУЧШАЯ ЦЕНА"
  },
  {
    id: 3,
    type: "Однодневные",
    title: "Каньон Сказка",
    days: 3, // добавили число
    startDate: "2026-07-21",
    subtitle: "Прогулка по марсианским пейзажам южного берега",
    img: "https://www.baibol.kg/img/attraction_gallery/152413549593403.jpg",
    level: "Легкая",
    duration: "1 день",
    price: "3 500",
    oldPrice: "5 000",
    badge: "АКЦИЯ"
  },
  {
    id: 4,
    type: "Многодневные",
    title: "Озеро Сон-Куль",
    days: 2, // добавили число
    startDate: "2026-07-22",
    subtitle: "Ночевка в юртах на высоте 3000 метров",
    img: "https://www.baibol.kg/img/attraction_gallery/152413595171158.jpg",
    level: "Средняя",
    duration: "2 дня / 1 ночь",
    price: "8 000",
    oldPrice: "10 500",
    badge: "РЕКОМЕНДУЕМ"
  },
  {
    id: 5,
    type: "Однодневные",
    title: "Башня Бурана",
    days: 3, // добавили число
    startDate: "2026-07-23",
    subtitle: "Путешествие в древнюю столицу Караханидов",
    img: "https://kg24.news/wp-content/uploads/2023/12/buraninskiy-minaret.jpg",
    level: "Легкая",
    duration: "1 день",
    price: "2 500",
    oldPrice: "3 800",
    badge: "ИСТОРИЯ"
  },
  {
    id: 6,
    type: "Многодневные",
    title: "Арсланбоб — ореховый рай",
    days: 3, // добавили число
    startDate: "2026-07-24",
    subtitle: "Пешие походы к водопадам в самом большом лесу мира",
    img: "https://ecology.md/uploads/files_elfinder/2018/11/11_02/lesa_arsl.jpg",
    level: "Средняя",
    duration: "3 дня / 2 ночи",
    price: "14 000",
    oldPrice: "18 000",
    badge: "ХИТ"
  },
  {
    id: 7,
    type: "Однодневные",
    title: "Ала-Арча",
    days: 3, // добавили число
    startDate: "2026-07-25",
    subtitle: "Горный поход к ледникам и свежий воздух",
    img: "https://mykgstan.com/uploads/images/00/00/14/2015/03/07/348485.jpg",
    level: "Высокая",
    duration: "1 день",
    price: "2 000",
    oldPrice: "3 000",
    badge: "АКТИВНЫЙ ОТДЫХ"
  },
  {
    id: 8,
    type: "Многодневные",
    title: "Ущелье Алтын-Арашан",
    days: 3, // добавили число
    startDate: "2026-07-26",
    subtitle: "Горячие источники и вид на пик Палатка",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f1/f5/6a/caption.jpg?w=1200&h=-1&s=1",
    level: "Средняя",
    duration: "2 дня / 1 ночь",
    price: "9 500",
    oldPrice: "12 000",
    badge: "ГОРЯЧЕЕ"
  }
];

function HomePage() {
  const [filters, setFilters] = useState({
    type: "Любой",
    minDays: "",
    maxDays: "",
    date: ""
  });

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);

    // Логика фильтрации
    const filtered = ALL_TOURS.filter(tour => {
      const matchType = newFilters.type === "Любой" || tour.type === newFilters.type;

      const matchMinDays = newFilters.minDays === "" || tour.days >= Number(newFilters.minDays);
      const matchMaxDays = newFilters.maxDays === "" || tour.days <= Number(newFilters.maxDays);

      const matchDate = newFilters.date === "" || tour.startDate === newFilters.date;

      return matchType && matchMinDays && matchMaxDays && matchDate;
    });

    setFilteredTours(filtered);
  };

  const [filteredTours, setFilteredTours] = useState(ALL_TOURS);

  return (
    <div className='container-app'>
      <Hero />
      <Filter onFilterChange={handleFilterChange} />
      <Tours items={filteredTours} />
    </div>
  );
}
export default HomePage;
