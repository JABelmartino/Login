const express = require('express');
const router = express.Router()
const authMiddleware = require('../../routes/middleware/auth/auth.middleware')
const countMiddleware = require('../../routes/middleware/count/count.middleware')


router.get('/', authMiddleware, countMiddleware, async(req,res)=> {
    try {
        res.status(200).render('index',{name: req.session.username, visits: req.session.visits})
    } catch (err) {
        res.status(500).json({
            succes:false,
            message: err.message      
          }); 
    }
});
router.get('/login', countMiddleware, async (req,res) =>{
          return res.render('login')
        });
router.post('/login', countMiddleware, async (req,res) =>{
    try {
        const {username} = req.body;
        console.log(username)
        if(username){
            req.session.username = username;
            req.session.admin = true;
            return res.render('index',{name: req.session.username, visits: req.session.visits})
        }
        return res.render('login')
    } catch (err) {
        res.status(500).json({
            success:false,
            message: err.message      
          }); 
    }
})

router.get('/logout', authMiddleware,(req,res)=>{
    try {
        req.session.destroy(err => {
            if(err){
                return res.status(500).send('No se pudo cerrar sesion')
            }})
            return res.status(200).send('Hasta luego')
    } catch (error) {
        
    }
})
module.exports = router;