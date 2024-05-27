const {home, about, blog, contact, blogSingle, agent, properties, propertiesSingle, services, sendEmail,} = require('../controllers/frontEndController')

const express = require('express')

const router = express.Router()

router.get('/', home)
router.get('/about', about)
router.get('/blog', blog)
router.get('/contact', contact)
router.get('/blogSingle', blogSingle)
router.get('/agent', agent)
router.get('/properties', properties)
router.get('/propertiesSingle', propertiesSingle)
router.get('/services', services)

router.post('/contact',sendEmail)

module.exports = router;