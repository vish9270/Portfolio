import React from 'react';
import { Route, Switch} from 'react-router-dom';
var Nav = require('Nav');
var Page = require('Page');

var Main = React.createClass({
  render:function(){
    return(
      <div>
        <Nav />
        <Page />
        <h2>This is the main Component.</h2>
      </div>
    );
  }
})

module.exports = Main;
