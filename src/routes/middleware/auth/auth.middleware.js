const authMiddleware = async (req, res, next) => {
    const { admin } = req.session;
    if(admin){
      return next()
    }
    return res.status(400).send(`<h1>Usuario no autenticado</h1>`)
  };
  
  module.exports = authMiddleware;
  