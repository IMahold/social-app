
const express = require('express')
const User = require('../models/User')
const router = express.Router()

// router.get('/register', (req,res)=> {
//     res.send("Hello from Register")
// })


router.post('/register', async (req, res) => {



    try {
        
        console.log('req.body is', req.body)

        const {email, username, pass} = req.body

        if (!email || !username || !pass) return res.send({success: false, errorId: 1})

        const newUser = new User(req.body)

        const user = await newUser.save()

        console.log('Register: user created is', user)

        res.send({success: true})
    } catch (error) {
        
        console.log('Register ERROR:', error.message)
        res.send(error.message)
    }
})

router.post('/login', async (req, res) => {

    try {
        
        console.log('req.body is', req.body)

        const {email, pass, username} = req.body

        // need to check if pass is missing or one of username and email
        // if email and password are missing then email || username = false.
        // then the opposite of false is true. if it's true then send that success = false
        if (!(email || username) || !pass) return res.send({success: false, errorId: 1})

        // if (!email && !username) //send success false
        // if (!pass) send success false

        // const user = User.findOne({email: email, pass: pass})
        const user = await User.findOne({$or: [{email}, {username}], pass}).select('email username')



        console.log('Login: user is', user)

        if (!user) return res.send({success: false, errorId: 2})

        res.send({success: true, user})
    } catch (error) {
        
        console.log('Register ERROR:', error.message)
        res.send(error.message)
    }
})

 module.exports = router