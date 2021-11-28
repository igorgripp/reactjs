import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  
  constructor(){
    super();
    this.state = { categorias: [] }
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias.bind(this));
  }

  _novasCategorias(categorias) {
    this.setState({...this.state, categorias});
  }

  _handelEventoInput(e) {
    if (e.keyCode === 13) {
      let nomeCategoria = e.target.value;
      this.props.categorias.adicionarCategoria(nomeCategoria);
    }
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="lista-categoria_input"
          onKeyUp={this._handelEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
