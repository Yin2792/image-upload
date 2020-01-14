const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const morgan =  require("morgan");
const helmet = require("helmet")
const cors = require('cors')
const app = express()
const port = process.env.Port || 5001
const appRouter = require("./routes")


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));

//http://localhost:5001/images/1578977715815food%20(12).jpg
app.use(express.static(path.join(__dirname, 'public')))
app.use('/images', express.static('images'))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use('/api/v1',appRouter)
app.listen(port,()=>{
    console.log(`The server is running on ${port}`)
})
