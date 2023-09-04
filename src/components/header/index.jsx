export const Header = ({ msg }) => {
  return (
    <div className="header-maeztra">
      <div className="msg-header flex-center">{msg}</div>
      <div className="i-header">
        <div className="wrapper-menu">
          <button className="button-menu drawer-icon" />
          <div className="logo-menu" />
        </div>
        <div className="wrapper-menu search">
          <input placeholder="O Que você Busca?"></input>
          <button className="primary">Buscar</button>
        </div>
        <div className="wrapper-menu mobile">
          <button className="button-menu search-icon" />
          <button className="button-menu shoppingbag-icon" />
        </div>
        <div className="wrapper-menu web">
          <button>
            <div className="user-icon" />
            Minha Conta
          </button>
          <button>
            <div className="heart-icon" />
            Minha Conta
          </button>
          <button>
            <div className="shoppingbag-icon" />
            Meu Carrinho
          </button>
        </div>
      </div>
      <div className="categories-menu">
        <button className="wrapper-menu web">
          <div className="dress-icon" /> Vestidos
        </button>
        <button className="wrapper-menu web">
          <div className="" /> Novidades
        </button>
        <button className="wrapper-menu web">
          <div className="" /> Roupas
        </button>
        <button className="wrapper-menu web">
          <div className="" /> Sapatos
        </button>
        <button className="wrapper-menu web">
          <div className="" /> Lingerie
        </button>
        <button className="wrapper-menu web">
          <div className="" /> Acessórios
        </button>
        <button className="wrapper-menu web">
          <div className="" /> OUTLET
        </button>
      </div>
    </div>
  );
};

export default Header;
