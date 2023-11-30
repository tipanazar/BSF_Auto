import { useRef, useState } from "react";

import { Icon } from "../Icon";

import s from "./selectField.module.scss";

export const SelectField = ({
  labelClassName,
  inputClassName,
  inputWrapperClassName,
  labelText,
  name,
  placeholder,
  htmlFor,
  type,
  value,
  setValue,
  readOnly,
  options,
  required,
}) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const listMarkup = options
    .filter((option) =>
      option.toString().toLowerCase().includes(inputValue.toLowerCase())
    )
    .map((option, idx) => {
      return (
        <li
          className={s.listItem}
          key={idx}
          onMouseDown={(e) => {
            e.preventDefault();
          }}
          onMouseUp={() => {
            setValue && setValue(option);
            if (!setValue) inputRef.current.value = option;
            inputRef.current.blur();
          }}
        >
          {option}
        </li>
      );
    });

  return (
    <>
      <label className={labelClassName} htmlFor={htmlFor}>
        {labelText}
      </label>
      <div className={`${inputWrapperClassName} ${s.inputWrapper}`}>
        <input
          className={inputClassName}
          placeholder={placeholder}
          name={name}
          htmlFor={htmlFor}
          type={type}
          readOnly={readOnly}
          value={value}
          required={required}
          ref={inputRef}
          onChange={(ev) => {
            setInputValue(ev.target.value);
          }}
        />
        <Icon className={s.icon} iconId="dropdownIndicator" />
        <ul className={s.list}>{listMarkup}</ul>
      </div>
    </>
  );
};
