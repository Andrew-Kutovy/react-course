const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const port = 8000;

app.use(cors());
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.post('/api/create', (request, response) => {
    console.log(request);
    response.json(request.body);
});

const server = app.listen(port, ()=>{
    console.log('dev serv is up and running on port' + port);
})







