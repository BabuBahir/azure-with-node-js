var React = require("react"),
    ReactDOMServer = require("react-dom/server"),
    myComponent = require("./ReactPartials/HelloComponent"),
    express = require("express"),
    ReactComponent = React.createFactory(myComponent),
    App = express();

App.set('views', __dirname + '/views');
App.set('view engine', 'ejs');

///////////// sql
const Sequelize = require('sequelize');
const sequelize = new Sequelize('demo', 'demo', 'Password@p', {
    dialect: 'mssql',
    host: 'rohitas.database.windows.net',
    dialectOptions: {
        encrypt: true
    }
});

sequelize.authenticate().then((err) => {
        console.log('Connection successful with azure sql');
    })
    .catch((err) => {
        console.log('Unable to connect to database', err);
    }); //connection


const Person = sequelize.define('Persons', {
    PersonID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    FirstName: {
        type: Sequelize.STRING
    },
    City: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
}); //model

///////////// sql
//var reactComponentMarkup = ReactComponent(), staticMarkup = ReactDOMServer.renderToString(reactComponentMarkup);      


App.get('/', function(req, res) {

    Person.findAll().then(Person => {
        res.render('index', {
            alldata: Person
        })
    })
});

var expressServer = App.listen(8080, function() {
    var serverAddress = expressServer.address();
    console.log("express listening to port no: ", serverAddress.port);
});