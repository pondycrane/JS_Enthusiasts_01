import React, { PropTypes, Component } from 'react';
import Title from '../../components/SlideComponents/Title'; 
import Navi from '../../components/SlideComponents/Navi'; 
import ListGroup from '../../components/SlideComponents/ListGroup'; 

class I extends Component {
	render() {
		var ideas = ['React.js Conf 2015', 'Highly popular since']
		return (
			<div className="listView">
				<Title titleName={"A Brief History of React"}/>
				<br/>
				<Navi slideN={this.props.slideN}/>
				<ListGroup titleName={"Brought to you by Facebook"} subtitleName="" ideas={ideas} pic="http://114.198.168.116/pic/I_pic.PNG"/>
			</div>
		)
	}
}

I.PropTypes = {
	slideN: PropTypes.number.isRequired
}

export default I;

