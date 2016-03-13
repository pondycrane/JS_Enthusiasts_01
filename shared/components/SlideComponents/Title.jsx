import React, { PropTypes } from 'react';

function Title(props) {
	return (
	<div className="listView">
		<h1 className="site-title">{ props.titleName }</h1>
	</div>
	)
}

Title.PropTypes = {
	titleName: PropTypes.string.isRequired
}

export default Title;