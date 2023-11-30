import React from "react";
import { useState } from "react";

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

import { SelectField } from "../../shared/components/SelectField/SelectField";
import { carMakes } from "../../shared/dataArrays";

import s from "./thirdPart.module.scss";

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
      <form
        className={s.form}
        onSubmit={(ev) => {
          ev.preventDefault();
          for (let el of ev.target.elements) {
            if (el.name === "") continue;
            console.log(`${el.name}: ${el.value}`);
          }
        }}
      >
        <p className={s.formTitle}>НАДІСЛАТИ ЗАПИТ</p>
        <label className={s.formLabel} htmlFor="name">
          Ваше ім'я*
        </label>
        <input
          className={s.formInput}
          placeholder="Тарас"
          type="text"
          id="name"
          name="Ім'я"
          required={true}
        />
        <label className={s.formLabel} htmlFor="phone">
          Ваш телефон*
        </label>
        <input
          className={s.formInput}
          placeholder="+380995555555"
          type="tel"
          id="phone"
          name="Телефон"
          pattern={"/^+d{10,13}$/s".source}
          required={true}
        />
        <div className={s.selectFieldsWrappers}>
          <div className={s.selectFieldWrappers}>
            <SelectField
              labelClassName={s.formLabel}
              inputClassName={`${s.formInput} ${s.selectField}`}
              inputWrapperClassName={s.selectFieldWrappers}
              labelText="Марка*"
              placeholder="Toyota"
              htmlFor="make"
              type="text"
              name="Марка"
              required={true}
              options={carMakes}
            />
          </div>
          <div className={s.selectFieldWrappers}>
            <label className={s.formLabel} htmlFor="model">
              Модель*
            </label>
            <input
              className={s.formInput}
              style={{ margin: 0, textAlign: "center" }}
              placeholder="Camry"
              type="text"
              id="model"
              name="Модель"
              required={true}
            />
          </div>
        </div>
        <div className={s.selectFieldsWrappers}>
          <div className={s.selectFieldWrappers}>
            <SelectField
              labelClassName={s.formLabel}
              inputClassName={`${s.formInput} ${s.selectField}`}
              inputWrapperClassName={s.selectFieldWrappers}
              labelText="Рік від*"
              placeholder="2007"
              htmlFor="yearFrom"
              type="number"
              name="Рік від"
              required={true}
              setValue={(value) =>
                handleYearRangeChange({ min: value, max: yearRange.max })
              }
              readOnly={true}
              options={dateOptions}
            />
          </div>
          <div className={s.selectFieldWrappers}>
            <SelectField
              labelClassName={s.formLabel}
              inputClassName={`${s.formInput} ${s.selectField}`}
              inputWrapperClassName={s.selectFieldWrappers}
              labelText="Рік до*"
              placeholder="2012"
              htmlFor="yearTo"
              type="number"
              name="Рік до"
              required={true}
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
              <label className={s.formLabel}>Ціна від $*</label>
              <input
                className={`${s.formInput} ${s.formPriceRangeInput}`}
                type="text"
                min={priceRangeMin}
                max={priceRangeMax}
                readOnly={true}
                name="Ціна від"
                value={`${priceRange[0]}$`}
              />
            </div>
            <div className={s.priceRangeInputBlock}>
              <label className={s.formLabel}>Ціна до $*</label>
              <input
                className={`${s.formInput} ${s.formPriceRangeInput}`}
                type="text"
                min={priceRangeMin}
                max={priceRangeMax}
                readOnly={true}
                name="Ціна до"
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
        <div
          className={s.selectFieldsWrappers}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <SelectField
            labelClassName={s.formLabel}
            inputClassName={`${s.formInput} ${s.selectField}`}
            inputWrapperClassName={s.selectFieldWrappers}
            labelText="Країна доставки*"
            placeholder="Країна доставки"
            htmlFor="country"
            type="text"
            name="Країна доставки"
            required={true}
            readOnly={true}
            options={["Україна", "Польща"]}
          />
        </div>
        <label className={s.formLabel} htmlFor="city">
          Місто доставки
        </label>
        <input
          className={s.formInput}
          placeholder="Варшава/Київ"
          type="text"
          id="city"
          name="Місто доставки"
        />
        <label className={s.formLabel} htmlFor="city">
          Коментар
        </label>
        <input
          className={s.formInput}
          placeholder="Я хочу щоб була аудіосистема Bose та..."
          type="text"
          id="city"
          name="Коментар"
        />
        <button className={s.formSubmitBtn} type="submit">
          Надіслати запит
        </button>
      </form>
    </div>
  );
};
