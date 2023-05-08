import s from "../../assets/scss/components/ui/Preloader.module.scss";

function Preloader() {
  return (
    <div className={s.wrapper}>
      <div className={s.preloader}>
        <div />
        <div />
      </div>
    </div>
  );
}

export default Preloader;
