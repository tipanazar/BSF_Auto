import React from "react";
import { useState } from "react";
// import Select from "react-select";

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

import s from "./thirdPart.module.scss";
import { SelectField } from "../../shared/components/SelectField/SelectField";

const priceRangeMin = 5000;
const priceRangeMax = 20000;
const minYear = 1950;
const yearMax = new Date().getFullYear() + 1;

const dateOptions = Array.from(
  { length: yearMax - minYear },
  (_, idx) => yearMax - idx
);

export const ThirdPart = () => {
  const [priceRange, setPriceRange] = useState([7500, 10000]);
  const [yearRange, setYearRange] = useState({ min: null, max: null });

  const handleYearRangeChange = (value) => {
    if (value.min && value.max && value.min > value.max) {
      setYearRange({ min: value.max, max: value.min });
    } else {
      setYearRange(value);
    }
  };

  return (
    <div className={s.wrapper}>
      <form className={s.form}>
        <p className={s.formTitle}>НАДІСЛАТИ ЗАПИТ</p>
        <label className={s.formLabel} htmlFor="name">
          Ваше ім'я
        </label>
        <input
          className={s.formInput}
          placeholder="Тарас"
          type="text"
          id="name"
        />
        <label className={s.formLabel} htmlFor="phone">
          Ваш телефон
        </label>
        <input
          className={s.formInput}
          placeholder="+380995555555"
          type="tel"
          id="phone"
        />
        <label className={s.formLabel} htmlFor="made">
          Марка
        </label>
        <input
          className={s.formInput}
          placeholder="Toyota"
          type="text"
          id="made"
        />
        <label className={s.formLabel} htmlFor="model">
          Модель
        </label>
        <input
          className={s.formInput}
          placeholder="Camry"
          type="text"
          id="model"
        />
        <div className={s.yearWrapper}>
          <div className={s.yearInputWrapper}>
            <SelectField
              labelClassName={s.formLabel}
              inputClassName={`${s.formInput} ${s.yearInput}`}
              inputWrapperClassName={s.yearInputWrapper}
              labelText="Рік від"
              // name="yearFrom"
              placeholder="2007"
              htmlFor="yearFrom"
              type="number"
              value={yearRange.min || ""}
              setValue={(value) =>
                handleYearRangeChange({ min: value, max: yearRange.max })
              }
              readOnly={true}
              options={dateOptions}
            />
          </div>
          <div className={s.yearInputWrapper}>
            <SelectField
              labelClassName={s.formLabel}
              inputClassName={`${s.formInput} ${s.yearInput}`}
              inputWrapperClassName={s.yearInputWrapper}
              labelText="Рік до"
              // name="yearTo"
              placeholder="2012"
              htmlFor="yearTo"
              type="number"
              value={yearRange.max || ""}
              setValue={(value) =>
                handleYearRangeChange({ min: yearRange.min, max: value })
              }
              readOnly={true}
              options={dateOptions}
            />
          </div>
        </div>
        <div className={s.priceRangeWrapper}>
          <div className={s.priceRangeInputsWrapper}>
            <div className={s.priceRangeInputBlock}>
              <label className={s.formLabel}>Ціна від $</label>
              <input
                className={`${s.formInput} ${s.formPriceRangeInput}`}
                type="text"
                min={priceRangeMin}
                max={priceRangeMax}
                readOnly={true}
                value={`${priceRange[0]}$`}
              />
            </div>
            <div className={s.priceRangeInputBlock}>
              <label className={s.formLabel}>Ціна до $</label>
              <input
                className={`${s.formInput} ${s.formPriceRangeInput}`}
                type="text"
                min={priceRangeMin}
                max={priceRangeMax}
                readOnly={true}
                value={`${priceRange[1]}$`}
              />
            </div>
          </div>
          <RangeSlider
            min={priceRangeMin}
            max={priceRangeMax}
            step={500}
            value={priceRange}
            onInput={(value) => setPriceRange(value)}
          />
        </div>
        <label className={s.formLabel} htmlFor="country">
          Країна доставки
        </label>
        <input
          className={s.formInput}
          placeholder="Зробити дропдаун"
          type="text"
          id="country"
        />
        <label className={s.formLabel} htmlFor="city">
          Місто доставки
        </label>
        <input
          className={s.formInput}
          placeholder="Варшава/Київ"
          type="text"
          id="city"
        />
        <button className={s.formSubmitBtn} type="submit">
          Надіслати запит
        </button>
      </form>
    </div>
  );
};
