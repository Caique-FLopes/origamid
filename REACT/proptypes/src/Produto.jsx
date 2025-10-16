import React from 'react';

export default class Produtos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contar: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('Montado');
  }

  componentDidUpdate() {
    this.componentDidMount();
  }

  componentWillUnmount() {
    console.log('saiu da tela');
  }

  handleClick() {
    this.setState((state) => ({ contar: state.contar + 1 }));
  }

  render() {
    return (
      <div>
        <h1>
          {this.props.titulo} : {this.state.contar}
        </h1>
        <button onClick={this.handleClick}>Adicionar</button>
      </div>
    );
  }
}
