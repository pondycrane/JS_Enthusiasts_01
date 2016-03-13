import React, { PropTypes } from 'react';
import { Link } from 'react-router'; 

function Navi(props) {
	return (
		<div>
			<Link to={'/slides/'+(props.slideN+1).toString()} style={{position: 'fixed', top: 5, right: 5}} >next</Link>
			<pre style={{position: 'fixed', bottom: 5, right: 5}}>{props.slideN}</pre>
		</div>
	)
}

Navi.PropTypes = {
	slideN: PropTypes.number.isRequired
}

export default Navi;