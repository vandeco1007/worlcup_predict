const express = require('express')
const {
    loginPage,
    signup,
    login
} = require('../controllers/account.controller')
const data = require('../controllers/data.controller')
const router = express.Router()

router.route('/signup')
.post(
    signup
)

router.route('/login')
.get(
    loginPage
)
.post(
    login
)

router.route('/admin/data')
.get(
    data
)


module.exports = router