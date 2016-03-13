import React, { PropTypes, Component } from 'react';
import Title from '../../components/SlideComponents/Title'; 
import Navi from '../../components/SlideComponents/Navi'; 
import ListGroup from '../../components/SlideComponents/ListGroup'; 


class II extends Component {
	render() {
		var ideas = ['modulizable, reusable', 'easy to understand', 'high performance, great for data visualization (smart rendering)']
		return (
			<div className="listView">
				<Title titleName={"React is Cool"}/>
				<br/>
				<Navi slideN={this.props.slideN}/>
				<ListGroup titleName={"What I like about React"} subtitleName="" ideas={ideas} pic=""/>
			</div>
		)
	}
}

II.PropTypes = {
	slideN: PropTypes.number.isRequired
}

export default II;

