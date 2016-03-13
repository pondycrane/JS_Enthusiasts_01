import React, { PropTypes, Component } from 'react';
import Title from '../../components/SlideComponents/Title'; 
import Navi from '../../components/SlideComponents/Navi'; 
import ListGroup from '../../components/SlideComponents/ListGroup'; 
import Rectangle from '../../components/SlideComponents/Rectangle'; 


class V extends Component {
	render() {
		var ideas = ['Containers are usually Class objects that contain data inherited through Flux or Redux', 'Components are pure function for displaying data']
		return (
			<div className="listView">
				<Title titleName={"Container vs Component"}/>
				<br/>
				<Navi slideN={this.props.slideN}/>
				<ListGroup titleName={"Data and Performance"} subtitleName="" ideas={ideas} pic=""/>
			</div>
		)
	}
}

V.PropTypes = {
	slideN: PropTypes.number.isRequired
}

export default V;