import sprite from "../../images/sprite.svg";

export const Icon = ({ className, iconId, width, height, fill, style }) => {
  return (
    <svg
      className={className}
      width={width || "100%"}
      height={height || "100%"}
      fill={fill}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      <use href={`${sprite}#${iconId}`} />
    </svg>
  );
};
