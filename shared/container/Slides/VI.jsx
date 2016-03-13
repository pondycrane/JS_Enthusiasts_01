import React, { PropTypes, Component } from 'react';
import Title from '../../components/SlideComponents/Title'; 
import Navi from '../../components/SlideComponents/Navi'; 
import ListGroup from '../../components/SlideComponents/ListGroup'; 
import Rectangle from '../../components/SlideComponents/Rectangle'; 


class VI extends Component {
	render() {
		return (
			<div className="listView">
				<Title titleName={"Make Your Own Slide!"}/>
				<br/>
				<Navi slideN={this.props.slideN}/>
			</div>
		)
	}
}

VI.PropTypes = {
	slideN: PropTypes.number.isRequired
}

export default VI;