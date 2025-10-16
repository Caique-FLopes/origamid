import AuthService from './AuthService';
import BaseService from './BaseService';

class UserService extends BaseService {
  constructor() {
    super('/user');
  }
  async register(data) {
    return await this.post(data);
  }

  async getUser(token) {
    return await AuthService.validateToken(token);
  }
}

export default new UserService();
