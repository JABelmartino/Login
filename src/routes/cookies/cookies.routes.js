const express = require('express');
const router = express.Router()

router.get('/save', async (req,res)=> {
    try {
        const { name, value, expire } = req.query
        if(!name || !value){
            res.status(400).json({
              success: false,
              message: 'Error en el nombre o valor de la cookie'
            })
          }
          let config = {}
          config['signed'] = true
          if(expire){
            config['maxAge'] = parseInt(expire) * 1000
          }
          res.cookie(name,value,config),
          res.status(200).json({
            success:true,
            message:'cookie guardada'
          });
        } catch (err) {
            res.status(500).json({
            success:false,
            message: err.message
        });
    }
});

router.get('/', async (req,res) =>{
    try {
        const {signedCookies} = req
        res.status(200).json(signedCookies)
    } catch (err) {
                res.status(500).json({
                success:false,
                message: err.message
            })
    }
})
router.delete('/:cookieName', (req,res) => {
    try {
        const {coookieName} =req.params
        res.clearCookie(cookieName) 
        res.status(200).json({
            success: true,
            message:'COokie borrada'
        })
    } catch (err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
}
)
module.exports = router