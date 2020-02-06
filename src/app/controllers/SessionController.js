// aqui só ficam as definições das chamadas da api
// seria o meu repository
// só pode ter create, read, update, delete
import * as Yup from 'yup';

import Admin from '../models/Admin';

// login
class SessionController {
  async create(req, res) {
    console.log('chegou aqui');
    // cria o objeto responsavel por validar o body
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    // verifica se não é valido
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        status: 'nok',
        message: 'Email ou senha inválidos',
      });
    }

    const { name, email } = req.body;

    const admim = Admin.findOne({ where: { email } });

    return res.status(200).json({ message: 'First request' });
  }
}

export default new SessionController();
