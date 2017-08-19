var express = require('express');
var app = express();
var bodyParser = require('body-parser'); 

const Sequelize = require('sequelize');

const sequelize = new Sequelize('demo', 'demo', 'Password@p', {
	dialect: 'mssql',
	host: 'rohitas.database.windows.net',	
	dialectOptions: {
		encrypt: true
	}
});

sequelize.authenticate().then((err) => {
	console.log('Connection successful', err);
})
.catch((err) => {
	console.log('Unable to connect to database', err);
});
 
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
}, {  timestamps: false ,} );
 

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(bodyParser.json())

app.set('view engine', 'ejs');
app.set('views','./views');
app.use('/static', express.static('public'));


app.get('/', function(req, res){
	Person.findAll().then(Person => {
			console.log( Person[1].dataValues ); 
			res.render("getData" , { queryDatabase : JSON.stringify(Person[1].dataValues) });
	}) 
});

app.listen(3000);


/////////////////////////////////////////////////
