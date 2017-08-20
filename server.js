var React = require("react"),
    ReactDOMServer = require("react-dom/server"),     
    myComponent =require("./HelloComponent"),
    express = require("express"),
    ReactComponent = React.createFactory(myComponent),
    expressApp = express();

expressApp.set('views', __dirname + '/views');
expressApp.set('view engine', 'ejs');

expressApp.get('', function(req, res){
   var reactComponentMarkup = ReactComponent(),
        staticMarkup = ReactDOMServer.renderToString(reactComponentMarkup);
    //res.send(staticMarkup);
    res.render('index', { helloComponentMarkup: staticMarkup })
});

var expressServer = expressApp.listen(8080, function () {
    var serverAddress = expressServer.address();
    console.log("express server started...");
    console.log("express server host name: ",serverAddress.address);
    console.log("express listening to port no: ",serverAddress.port);
});