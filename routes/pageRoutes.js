//ไฟล์ที่จัดการเส้นทางไปยัง Page ต่างๆ

const express = require('express')

const router = express.Router()

router.get('/', (request, response)=>{
    response.sendFile('/views/home.html', {root:'.'})
})

router.get('/about', (request, response)=>{
    response.sendFile('/views/about.html', {root:'.'})
})

module.exports = router