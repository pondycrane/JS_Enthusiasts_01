import React, { PropTypes } from 'react';

function Rectangle(props) {
	var style = {
		width : props.width, 
		height : props.height, 
		border : "3px", 
		solid : "#000",
		borderStyle: "solid",
		borderColor : props.color,
		position : "fixed",
		top: props.top, 
		left: props.left
	}
	var style_desc = {
		position: "absolute", 
		color: props.color
	}
	if (props.position == "rightBottom") {
		style_desc.right = "5px"
		style_desc.bottom = "5px"
	} else {
		style_desc.left = "5px"
		style_desc.top = "5px"
	}
	return (
		<div id="regtangle" style={style}>
			<p style={style_desc}>{props.description}</p>
		</div>
	)
}

Rectangle.PropTypes = {
	width: PropTypes.string.isRequired, 
	height: PropTypes.string.isRequired, 
	color: PropTypes.string.isRequired, 
	top : PropTypes.string.isRequired, 
	left : PropTypes.string.isRequired,
	description: PropTypes.string.isRequired, 
	position : PropTypes.string.isRequired
}

export default Rectangle;