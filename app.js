const express= require('express')
const dotenv = require('dotenv')
dotenv.config()
const expressEjsLayout = require('express-ejs-layouts')
const frontEndRoutes = require('./routes/frontEndRoutes')
const app = express()

const port = process.env.Port || 3000

app.set('view engine','ejs')
app.set("layout", __dirname + "/views/master")
app.set('views', __dirname + "/views/pages/")
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname + '/public'));
app.use(expressEjsLayout)
app.use("/", frontEndRoutes)

const server = ()=>{
    try {
        app.listen(port ,()=>{
            console.log(`server is running on http://localhost:${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

server()