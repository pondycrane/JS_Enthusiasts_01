import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'; 
import I from './I'
import II from './II'
import III from './III'
import IV from './IV'
import V from './V'
import VI from './VI'

var slugsToHandlers = {
  '1': I,
  '2': II, 
  '3': III,
  '4': IV, 
  '5': V, 
  '6': VI
};

class Sliddee extends Component {
  render() {
    var Handler = slugsToHandlers[this.props.params.slug]
    return (
		<div className="listView">
			<Handler slideN={parseInt(this.props.params.slug)}/>
		</div>
	)}
}

Sliddee.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default Sliddee;
