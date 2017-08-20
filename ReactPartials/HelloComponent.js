var React = require("react")
var ReactDOM = require('react-dom');
var _ = require('lodash')

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
});                          //connection
 
 
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
}, {  timestamps: false ,} );  //model
 
var tempstring ="hi kaaju"
 
Person.findAll().then(Person => {
		tempstring = Person[3].dataValues;			 
}) 
 
 
 
var HelloComponent = React.createClass({
	
	getInitialState: function() {
    return {
      aptBodyVisible: false,
      orderBy: 'petName',
      orderDir: 'asc',
      queryText: '',
      myAppointments: []
    } //return
  }, //getInitialState

  componentDidMount: function() {
    this.serverRequest = $.get('./js/data.json', function(result) {
      var tempApts = result;
      this.setState({
        myAppointments: tempApts
      }); //setState
    }.bind(this));
  }, //componentDidMount
  
    render:function(){
        return React.createElement('h1', null, tempstring);
    }
});



module.exports = HelloComponent;