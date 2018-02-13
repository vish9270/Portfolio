import React from 'react';
import {NavLink} from 'react-router-dom';

var Nav = React.createClass({
  render:function(){
    return(
      <div>
        <NavLink to='/home' activeClassName="active" activeStyle={
            {
              fontWeight:"bold",
              background:"#ff8c00"
            }
          }>Home</NavLink>
        <NavLink to='/skills' activeClassName="active" activeStyle={
              {
                fontWeight:"bold",
                background:"#ff8c00"
              }
            }> Skills</NavLink>
          <NavLink to='/education' activeClassName="active" activeStyle={
                {
                  fontWeight:"bold",
                  background:"#ff8c00"
                }
              }> Education</NavLink>
            <NavLink to='/contact' activeClassName="active" activeStyle={
                  {
                    fontWeight:"bold",
                    background:"#ff8c00"
                  }
                }> Contact</NavLink>
      </div>
    );
  }
})

module.exports = Nav;
