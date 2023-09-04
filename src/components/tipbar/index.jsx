export const Tipbar = ({ brand, src, title, description }) => {
  return brand === true ? (
    <div className="tipbar">
      <img src={src} alt="" />
    </div>
  ) : (
    <div className="tipbar">
      <img src={src} alt="" height={32} />
      <div className="wrapper-text-tipbar">
        <span>{title}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Tipbar;
