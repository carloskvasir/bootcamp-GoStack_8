import jwt from 'jsonwebtoken';

import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    // Exists account whith this email?
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    // check password
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match.' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      // infos para resgatar, string unica
      token: jwt.sign({ id }, '9e625c2f9dad0710d6c388bbecd621b2', {
        expiresIn: '7d',
      }),
    });
  }
}

export default new SessionController();
