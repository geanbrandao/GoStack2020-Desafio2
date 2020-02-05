// aqui só ficam as definições das chamadas da api
// seria o meu repository
// só pode ter create, read, update, delete

// login
class SessionController {
  create(req, res) {
    return res.status(200).json({ message: 'First request' });
  }
}

export default new SessionController();
