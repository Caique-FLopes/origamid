import BaseService from './BaseService';

class AuthService extends BaseService {
  constructor() {
    super('/jwt-auth/v1/token');
  }
  async getToken(data) {
    const token = await this.post(data);
    return token;
  }
  async validateToken(token) {
    this.url = this.url + '/validate';
    return await this.post(
      {},
      {
        Authorization: `Bearer ${token}`,
      }
    );
  }
}

export default new AuthService();
