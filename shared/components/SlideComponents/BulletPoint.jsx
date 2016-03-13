import React, { PropTypes } from 'react';

function BulletPoint(props) {
	return (
		<div>
			<li>{ props.data }</li>
		</div>
	)
}

BulletPoint.PropTypes = {
	data: PropTypes.string.isRequired, 
}

export default BulletPoint;