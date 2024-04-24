const express = require('express')
const { register, login, logout, test } = require('../controller/userController')

const router = express.Router()

router.post('/',test)

router.post('/register',register)

router.post('/login',login)

router.post('/logout',logout)

module.exports= router