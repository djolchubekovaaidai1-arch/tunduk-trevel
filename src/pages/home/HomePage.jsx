import { useState, useEffect } from 'react';
import Hero from '../../components/hero/Hero';
import Filter from '../../components/filter/Filter';
import Tours from '../../components/Tours/Tours';
import {getAllTours} from "../../service/tourService"



function HomePage() {
   const [filteredTours, setFilteredTours] = useState([]);

  useEffect(() => {
    getAllTours().then(data =>{
      console.log("then",data);
       setFilteredTours(data);
    })
   }, [])

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

  return (
    <div className='container-app'>
      <Hero />
      <Filter onFilterChange={handleFilterChange} />
      <Tours items={filteredTours} />
    </div>
  );
}
export default HomePage;
