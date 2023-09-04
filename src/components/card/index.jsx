export const Card = ({ photo, price, title, description, colors }) => {
  return (
    <div className="container-card">
      <img
        className="img-card"
        alt=""
        src={photo}
        style={{ minHeight: "381px", maxWidth: "308px" }}
      />
      <div className="wrapper-card">
        <div className="colors-card">
          {colors !== undefined ? (
            colors.map((color) => {
              return (
                <button
                  key={color.key}
                  style={{
                    backgroundColor: color.color,
                    width: "27px",
                    height: "27px",
                    marginRight: "8px",
                  }}
                ></button>
              );
            })
          ) : (
            <></>
          )}
        </div>
        <h4 className="price-card">{price}</h4>
        <p className="name-card">{title}</p>
        <span className="description-card">{description}</span>
        <button className="button-card primary">Adicionar</button>
      </div>
    </div>
  );
};

export default Card;
