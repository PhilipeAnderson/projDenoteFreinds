const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.redirect('links/home')
})

module.exports = router