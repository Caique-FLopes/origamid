import URL from './URL';

export default class BaseService {
  constructor(endpoint = '') {
    this.url = `${URL}${endpoint}`;
    this.header = {
      'Content-Type': 'application/json',
    };
  }

  async get(id = '') {
    const res = await fetch(this.url);
    const json = await res.json();
    return json ? json : new Error(res.status);
  }

  async post(body, headers = {}) {
    const res = await fetch(this.url, {
      method: 'POST',
      headers: {
        ...this.header,
        ...headers,
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  async delete(body, headers = {}) {
    const res = await fetch(this.url, {
      headers: {
        method: 'POST',
        ...this.header,
        ...headers,
        body: JSON.stringify(body),
      },
    });
    const json = await res.json();
    return json ? json : new Error(res.status);
  }
}
