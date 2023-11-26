import { useRef } from "react";

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
}) => {
  const inputRef = useRef(null);

  const listMarkup = options.map((option, idx) => {
    return (
      <li
        className={s.listItem}
        key={idx}
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        onMouseUp={() => {
          setValue(option);
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
          style={{ margin: 0 }}
          className={inputClassName}
          placeholder={placeholder}
          name={name}
          htmlFor={htmlFor}
          type={type}
          readOnly={readOnly}
          value={value}
          ref={inputRef}
        />
        <Icon className={s.icon} iconId="dropdownIndicator" />
        <ul className={s.list}>{listMarkup}</ul>
      </div>
    </>
  );
};
