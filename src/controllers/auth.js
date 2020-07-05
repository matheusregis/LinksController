const express = require('express')
const { Account } = require('../models')
const router = express.Router()

router.get('/sign-in', (req, res) => {
    return res.json('Sign in')
})

router.get('/sign-up', async (req, res) => {

    const result = await Account.create({ email: 'matheustrai@gmail.com', password: '123456' })
    console.log(result)
    return res.json('Sign up')
})

module.exports = router;