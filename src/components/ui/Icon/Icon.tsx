import s from "./Icon.module.scss";

interface IIconProps {
  classNames?: string;
  icon: string;
  color?: string
}

function Icon({ classNames, icon, color }: IIconProps) {
  return (
    <svg className={`${s.icon} ${s[`icon-${icon}`]} ${s[`icon-${color}`]} ${classNames}`} role="img">
      <use xlinkHref={`#${icon}`} />
    </svg>
  );
}

Icon.defaultProps = {
  classNames: "",
  color: "black",
};

export default Icon;
