const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const routes = require('./routes');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

const connection = require('./config/connection');

app.use(routes);

connection.sync().then(result => {
    //console.log(result);
    app.listen(8081);
}).catch(error => {
    console.log(error);
});

app.listen(8081);

//app.get('/', (req, res) => res.send('Server Rodando'));
console.log('\nServer Rodando Porta: 8081\nServer: http://localhost:8081/\n');