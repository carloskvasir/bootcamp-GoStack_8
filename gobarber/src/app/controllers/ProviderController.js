import User from '../models/User';

class ProviderController {
  async index(req, res) {
    return res.json({ ok: 'ok' });
  }
}
export default new ProviderController();
