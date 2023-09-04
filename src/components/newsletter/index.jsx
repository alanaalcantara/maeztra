export const Newslettter = () => {
  return (
    <div className="container-newsletter">
      <h2>Receba Nossa Newsletter</h2>
      <div className="wrapper-newsletter">
        <input
          className="input-newsletter"
          type="text"
          placeholder="Digite seu e-mail"
        />
        <button className="primary">Enviar</button>
      </div>
    </div>
  );
};

export default Newslettter;
