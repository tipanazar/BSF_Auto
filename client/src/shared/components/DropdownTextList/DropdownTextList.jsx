import { useState } from "react";
import { Icon } from "../Icon";

import s from "./dropdownTextList.module.scss";

export const DropdownTextList = ({ data }) => {
  const [isOpened, setIsOpened] = useState([]);

  const handleClick = (idx) => {
    if (isOpened.includes(idx)) {
      setIsOpened(isOpened.filter((item) => item !== idx));
    } else {
      setIsOpened([...isOpened, idx]);
    }
  };

  const dropdownMarkup = data.map((item, idx) => (
    <li className={s.listItem} key={idx} onClick={() => handleClick(idx + 1)}>
      <div
        className={s.titleWrapper}
        style={
          isOpened.find((item) => item === idx + 1)
            ? {}
            : { borderRadius: "10px" }
        }
      >
        <Icon
          className={s.icon}
          iconId="dropdownIndicator"
          style={
            isOpened.find((item) => item === idx + 1)
              ? { transform: "rotateX(180deg)" }
              : {}
          }
        />
        <p className={s.title}>{item.title}</p>
      </div>
      <p
        className={s.description}
        style={
          isOpened.find((item) => item === idx + 1)
            ? {}
            : { height: 0, padding: "0 10px", opacity: 0 }
        }
        dangerouslySetInnerHTML={{
          __html: item.description.replace(/\n/g, "<br/>"),
        }}
      ></p>
    </li>
  ));

  return <ul className={s.list}>{dropdownMarkup}</ul>;
};
