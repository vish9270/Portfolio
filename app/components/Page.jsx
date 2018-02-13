import React from 'react';
import { Route, Switch} from 'react-router-dom';
var Home = require('Home');
var Skills = require('Skills');
var Education = require('Education');
var Contact = require('Contact');

var Page = React.createClass({
  render:function(){
    return(
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/skills" component={Skills}></Route>
          <Route exact path="/education" component={Education}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
      </div>
    );
  }
})

module.exports = Page;
