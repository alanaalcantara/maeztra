import "./App.css";
import Banner from "./components/banner";
import Card from "./components/card";
import Carousel from "./components/carousel";
import Expandable from "./components/expandable";
import Footer from "./components/footer";
import Header from "./components/header";
import Newslettter from "./components/newsletter";
import Tipbar from "./components/tipbar";

function App() {
  setTimeout(() => {
    var overflowContainer = document.getElementById("tipbar");
    overflowContainer.scrollTo(overflowContainer.offsetWidth / 2, 0);
  }, 10);

  return (
    <div className="App">
      <Header
        msg={"Acompanhe as melhores promoções disponíveis aqui na Maeztra."}
      />
      <Carousel />
      <div className="container-tipbar">
        <h6>Por que comprar na Maeztra?</h6>
        <div id="tipbar" className="wrapper-tipbar">
          <Tipbar
            brand={false}
            src="https://i.imgur.com/o6jS7Gc.png"
            title="Produtos importados"
            description="Produto de Alta Qualidade"
          />
          <Tipbar
            brand={false}
            src="https://i.imgur.com/QTFwPmU.png"
            title="Estoque no Brasil"
            description="Produtos mais perto de você!"
          />
          <Tipbar
            brand={false}
            src="https://i.imgur.com/5GTW9ii.png"
            title="Trocas Garantidas"
            description="Trocas em até 48 horas, vejas as regras"
          />
          <Tipbar
            brand={false}
            src="https://i.imgur.com/sxrqa57.png"
            title="Ganhe 5% off"
            description="Pagando à vista no Cartão"
          />
          <Tipbar
            brand={false}
            src="https://i.imgur.com/pyNUUin.png"
            title="Frete Grátis"
            description="Em compras acima de R$ 499,00"
          />
        </div>
      </div>
      <div className="container-parcerias">
        <h3 className="title-parcerias">Marcas Parceiras</h3>
        <div id="tipbar" className="wrapper-tipbar">
          <Tipbar brand={true} src={"https://i.imgur.com/Qoc0YF7.png"}></Tipbar>
          <Tipbar brand={true} src={"https://i.imgur.com/cHLLxR4.png"}></Tipbar>
          <Tipbar brand={true} src={"https://i.imgur.com/JOTNQgl.png"}></Tipbar>
          <Tipbar brand={true} src={"https://i.imgur.com/PN0nOAY.png"}></Tipbar>
          <Tipbar brand={true} src={"https://i.imgur.com/qZ1WvYA.png"}></Tipbar>
        </div>
      </div>
      <div className="container-showcase">
        <h3 className="title-parcerias">As Mais Pedidas</h3>
        <div className="wrapper-showcase">
          <Card
            photo={
              "https://s3-alpha-sig.figma.com/img/fe68/8b4a/8a36de6cf9fff367e7503f34e205264c?Expires=1694390400&Signature=mrSjt~ibm5lXB1DX3oMTbql-OI8rITLYrm6lguNoCMY41zaEWT3xXEgnT8ZPJRnwG-toEjCaU~DV4-f08ZyYKfyDmI~SnJpdTBhofm0tSS2DwOgL-64csrt1nWjYVID9Fg7zlgPARMYq~roYoPD0psqiyJPTLalhNJlKQs4--5w8TbS8LrKAIdlz5dbcLB0861ZB4PoV73b~93dUm0vtBwXQuTLrGOXTYPpoNaRlVN~QzK1mRyhakQQMxIIyZWza0SEdHKlP0rWY84oDM6adAk9HCYnQX1mBaOchdF9AD4Ji6VYuePH1SQNeAnS9AbfXQaf~KT5ip5-BaY6YBxN8og__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            }
            title="Faux Suede Mini Skirt"
            price="R$ 500,00"
            description="A faux suede mini skirt featuring exposed button-front closures and panel seam construction."
            colors={[
              { key: "1", color: "#DEAC71" },
              { key: "2", color: "#D37164" },
              { key: "3", color: "#6497D3" },
              { key: "4", color: "#3c3b79" },
            ]}
          />
          <Card
            photo={
              "https://s3-alpha-sig.figma.com/img/d565/e7e8/d0ba6e2b4d4829c677785d11f87ee3bd?Expires=1694995200&Signature=fi6vxJt6B7NuD53LlLRXACnBEFUo99I6lskMobi9VD9Seb3c01WgOuHG7x92q4pMCwBdYzQIxJw-iO~dOqbJJfU1lPtDLat4-33uCVcf7R5uNDVR2gXFESUhecRdH9FX3fndHY7LfXZoT4nm-svaQ92YBe143Vtx8Laql8rHluD0Yyq3ijO9F~MsaZmsjJVNsln~JI-iPA5gkrAidlLoQY3HGzH4kQpJZ9saT7thIguS4iJ9zvetaykNtDJgUOZhC~DiTc9CdWneq-c2XGQb5sqcNF8UvB5tnvfKh4BP9Zd7TrQ~azub0x5XX4~JMcGz5JJdQznl2PFTZkubBD~C3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            }
            title="Faux Suede Mini Skirt"
            price="R$ 500,00"
            description="A faux suede mini skirt featuring exposed button-front closures and panel seam construction."
            colors={[
              { key: "1", color: "#1C1A19" },
              { key: "2", color: "#D84E4B" },
              { key: "3", color: "#CFC9B0" },
              { key: "4", color: "#EAE9E5" },
            ]}
          />
          <Card
            photo={
              "https://s3-alpha-sig.figma.com/img/fe68/8b4a/8a36de6cf9fff367e7503f34e205264c?Expires=1694390400&Signature=mrSjt~ibm5lXB1DX3oMTbql-OI8rITLYrm6lguNoCMY41zaEWT3xXEgnT8ZPJRnwG-toEjCaU~DV4-f08ZyYKfyDmI~SnJpdTBhofm0tSS2DwOgL-64csrt1nWjYVID9Fg7zlgPARMYq~roYoPD0psqiyJPTLalhNJlKQs4--5w8TbS8LrKAIdlz5dbcLB0861ZB4PoV73b~93dUm0vtBwXQuTLrGOXTYPpoNaRlVN~QzK1mRyhakQQMxIIyZWza0SEdHKlP0rWY84oDM6adAk9HCYnQX1mBaOchdF9AD4Ji6VYuePH1SQNeAnS9AbfXQaf~KT5ip5-BaY6YBxN8og__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            }
            title="Faux Suede Mini Skirt"
            price="R$ 500,00"
            description="A faux suede mini skirt featuring exposed button-front closures and panel seam construction."
            colors={[
              { key: "1", color: "#DEAC71" },
              { key: "2", color: "#D37164" },
              { key: "3", color: "#6497D3" },
              { key: "4", color: "#3c3b79" },
            ]}
          />
          <Card
            photo={
              "https://s3-alpha-sig.figma.com/img/d565/e7e8/d0ba6e2b4d4829c677785d11f87ee3bd?Expires=1694995200&Signature=fi6vxJt6B7NuD53LlLRXACnBEFUo99I6lskMobi9VD9Seb3c01WgOuHG7x92q4pMCwBdYzQIxJw-iO~dOqbJJfU1lPtDLat4-33uCVcf7R5uNDVR2gXFESUhecRdH9FX3fndHY7LfXZoT4nm-svaQ92YBe143Vtx8Laql8rHluD0Yyq3ijO9F~MsaZmsjJVNsln~JI-iPA5gkrAidlLoQY3HGzH4kQpJZ9saT7thIguS4iJ9zvetaykNtDJgUOZhC~DiTc9CdWneq-c2XGQb5sqcNF8UvB5tnvfKh4BP9Zd7TrQ~azub0x5XX4~JMcGz5JJdQznl2PFTZkubBD~C3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            }
            title="Faux Suede Mini Skirt"
            price="R$ 500,00"
            description="A faux suede mini skirt featuring exposed button-front closures and panel seam construction."
            colors={[
              { key: "1", color: "#1C1A19" },
              { key: "2", color: "#D84E4B" },
              { key: "3", color: "#CFC9B0" },
              { key: "4", color: "#EAE9E5" },
            ]}
          />
          <Card
            photo={
              "https://s3-alpha-sig.figma.com/img/fe68/8b4a/8a36de6cf9fff367e7503f34e205264c?Expires=1694390400&Signature=mrSjt~ibm5lXB1DX3oMTbql-OI8rITLYrm6lguNoCMY41zaEWT3xXEgnT8ZPJRnwG-toEjCaU~DV4-f08ZyYKfyDmI~SnJpdTBhofm0tSS2DwOgL-64csrt1nWjYVID9Fg7zlgPARMYq~roYoPD0psqiyJPTLalhNJlKQs4--5w8TbS8LrKAIdlz5dbcLB0861ZB4PoV73b~93dUm0vtBwXQuTLrGOXTYPpoNaRlVN~QzK1mRyhakQQMxIIyZWza0SEdHKlP0rWY84oDM6adAk9HCYnQX1mBaOchdF9AD4Ji6VYuePH1SQNeAnS9AbfXQaf~KT5ip5-BaY6YBxN8og__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            }
            title="Faux Suede Mini Skirt"
            price="R$ 500,00"
            description="A faux suede mini skirt featuring exposed button-front closures and panel seam construction."
            colors={[
              { key: "1", color: "#DEAC71" },
              { key: "2", color: "#D37164" },
              { key: "3", color: "#6497D3" },
              { key: "4", color: "#3c3b79" },
            ]}
          />
        </div>
      </div>
      <Banner />
      <Newslettter />
      <div className="container-info mobile">
        <Expandable title={"Informações"}>
          <div className="wrapper-info">
            <a href="_">Quem somos</a>
            <a href="_">Prazo de Envio</a>
            <a href="_">Troca e Devoluções</a>
            <a href="_">Promoções e Cupons</a>
          </div>
        </Expandable>
        <Expandable title={"Minha Conta"}>
          <div className="wrapper-info">
            <a href="_">Minha Conta</a>
            <a href="_">Meus Pedidos</a>
            <a href="_">Cadastre-se</a>
          </div>
        </Expandable>
        <Expandable title={"Onde nos encontrar"}>
          <div className="wrapper-info">
            <a href="_">Lojas</a>
            <a href="_">Endereço</a>
          </div>
        </Expandable>
      </div>
      <div className="container-info web">
        <div>
          <h6>Informações</h6>
          <div className="wrapper-info">
            <a href="_">Quem somos</a>
            <a href="_">Prazo de Envio</a>
            <a href="_">Troca e Devoluções</a>
            <a href="_">Promoções e Cupons</a>
          </div>
        </div>
        <div>
          <h6>Minha Conta</h6>
          <div className="wrapper-info">
            <a href="_">Minha Conta</a>
            <a href="_">Meus Pedidos</a>
            <a href="_">Cadastre-se</a>
          </div>
        </div>
        <div>
          <h6>Onde nos encontrar</h6>
          <div className="wrapper-info">
            <a href="_">Lojas</a>
            <a href="_">Endereço</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
