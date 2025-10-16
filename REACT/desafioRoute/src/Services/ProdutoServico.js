import BaseServico from './BaseServico';

class ProdutoServico extends BaseServico {
  constructor() {
    super();
    this.api = this.api + 'produto/';
  }
  async findById(id) {
    try {
      const data = await this.get(id);
      return data;
    } catch (error) {
      return error;
    }
  }
  async findAll() {
    try {
      const data = await this.get();
      return data;
    } catch (error) {
      return error;
    }
  }
}

export default new ProdutoServico();
