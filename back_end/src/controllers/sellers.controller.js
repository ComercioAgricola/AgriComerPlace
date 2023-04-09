const sellers = require('../models/sellers.model')
const jwt = require('jsonwebtoken');


module.exports = class SellersController{

    static async getAllSellers(req, res) {
        try {
          const result = await sellers.find({});
          res.status(200).json(result);
        } catch (err) {
          res.status(404).json({ message: err.message });
        }
    }

    static async createProduct(req, res) {
      try {
       
        const {dataProduct} = req.body
        const auth = req.get('authorization');

        let token = null;

        if(auth && auth.toLowerCase().startsWith('bearer')){
          token = auth.substring(7)
        }

        const decodedtoken = jwt.verify(token, process.env.JWT_SECRET)

        if(!token || !decodedtoken.id){
          res.status(401).json({msg: "error de token"})
        }

      } catch (err) {
        res.status(404).json({ message: err.message });
      }
  }

}