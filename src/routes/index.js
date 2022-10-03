const express = require('express')
const sessionRoutes = require('./sessions/session.routes')
const router= express.Router();

const cookiesRoutes = require('./cookies/cookies.routes')

router.get('/health', (req,res) => {
res.status(200).json({
    success: true,
    message:'Health up',
})
})
.use('/cookies', cookiesRoutes)
.use('/session', sessionRoutes)
module.exports = router;