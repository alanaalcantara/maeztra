export const Carousel = () => {
  return (
    <div className="carousel">
      <div className="container-carousel">
        <button className="prev-icon"></button>
        <div className="wrapper-carousel">
          <h2 className="title-carousel">Promoções de Outono</h2>
          <p>Confira os melhores looks para combinar com você nesse Outono</p>
          <button className="primary">Conferir</button>
        </div>
        <button className="next-icon"></button>
      </div>
      <div className="dots">
        <div className="elipsecheia-icon" />
        <div className="elipsevazio-icon" />
        <div className="elipsevazio-icon" />
        <div className="elipsevazio-icon" />
        <div className="elipsevazio-icon" />
      </div>
    </div>
  );
};

export default Carousel;
