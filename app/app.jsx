var React = require('react');
var ReactDOM = require('react-dom');
var {BrowserRouter} = require('react-router-dom');
var Main = require('Main');
var Home = require('Home');

ReactDOM.render(
    <BrowserRouter>
      <div>
        <Main />
      </div>
    </BrowserRouter>,
    document.getElementById('app')
);
