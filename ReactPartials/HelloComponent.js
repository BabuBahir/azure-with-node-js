var React = require("react")
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
 
var _ = require('lodash')
 
var tempstring ="hi kaaju"

var HelloComponent = createReactClass({
	
	getInitialState: function() {
    return {
      aptBodyVisible: false,
      orderBy: 'petName',
      orderDir: 'asc',
      queryText: '',
      myAppointments: tempstring
    } //return
  }, //getInitialState
    
   
    render:function(){
		 var myAppointments =  this.state.myAppointments  ;             	 
         return React.createElement('h1', null, myAppointments)
		//return myAppointments
    }
});



module.exports = HelloComponent;