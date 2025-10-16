export default class BaseServico {
  constructor() {
    this.api = 'https://ranekapi.origamid.dev/json/api/';
    this.headers = { 'Content-type': 'application/json' };
  }

  async get(id = '') {
    const resposta = await fetch(this.api + id);
    if (!resposta.ok) {
      return 'Erro de solicitação';
    }
    const json = await resposta.json();
    return json;
  }
}
