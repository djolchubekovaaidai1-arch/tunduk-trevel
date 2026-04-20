import React from 'react';
import style from './Filter.module.css';

const Filter = ({ onFilterChange }) => {
  return (
    <div className={style.filterContainer}>
      <h2>Поиск тура</h2>
      <div className={style.inputsGroup}>
        
        {/* Тип тура */}
        <div className={style.inputWrapper}>
          <label>Тип тура</label>
          <select onChange={(e) => onFilterChange('type', e.target.value)}>
            <option value="Любой">Любой</option>
            <option value="Однодневные">Однодневные</option>
            <option value="Многодневные">Многодневные</option>
          </select>
        </div>
        
        {/* Продолжительность */}
        <div className={style.inputWrapper}>
          <label>Продолжительность (дней)</label>
          <div className={style.row}>
            <input 
              type="number" 
              placeholder="От" 
              onChange={(e) => onFilterChange('minDays', e.target.value)} 
            />
            <input 
              type="number" 
              placeholder="До" 
              onChange={(e) => onFilterChange('maxDays', e.target.value)} 
            />
          </div>
        </div>

        {/* Даты тура */}
        <div className={style.inputWrapper}>
          <label>Дата начала</label>
          <input 
            type="date" 
            onChange={(e) => onFilterChange('date', e.target.value)} 
          />
        </div>

        <button className={style.searchBtn}>Найти</button>
      </div>
    </div>
  );
};

export default Filter;
