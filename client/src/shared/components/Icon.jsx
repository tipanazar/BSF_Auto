import sprite from "../../images/sprite.svg";

export const Icon = ({ className, iconId, width, height, fill, style }) => {
  return (
    <svg
      className={className}
      width={width || "100%"}
      height={height || "100%"}
      fill={fill}
      style={style}
    >
      <use href={`${sprite}#${iconId}`}
    //    width="100%" height="100%"
    //    width="80px" height="80px"
       />
    </svg>
  );
};
