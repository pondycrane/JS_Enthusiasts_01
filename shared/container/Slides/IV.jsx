import React, { PropTypes, Component } from 'react';
import Title from '../../components/SlideComponents/Title'; 
import Navi from '../../components/SlideComponents/Navi'; 
import ListGroup from '../../components/SlideComponents/ListGroup'; 
import Rectangle from '../../components/SlideComponents/Rectangle'; 


class IV extends Component {
	render() {
		var ideas = ['self-defined components', 'component sharing', 'its fun!']
		return (
			<div className="listView">
				<Title titleName={"This Slide is Build with React! "}/>
				<br/>
				<ListGroup titleName={"Build things with reusable components"} subtitleName="don't reinvent the wheel" ideas={ideas} pic=""/>
				<Rectangle width={"800px"} height={"90px"} color={"red"} top={"2px"} left={"3px"} description={"Component: Title.jsx"} position={"rightBottom"} />
				<Rectangle width={"300px"} height={"200px"} color={"red"} top={"700px"} left={"1100px"} description={"Component: Navi.jsx"} position={"upperLeft"} />
				<Rectangle width={"600px"} height={"190px"} color={"red"} top={"110px"} left={"3px"} description={"Component: ListGroup.jsx"} position={"rightBottom"} />
				<Rectangle width={"400px"} height={"180px"} color={"orange"} top={"113px"} left={"6px"} description={"Component: Card (Material-ui)"} position={"rightBottom"} />
				<Rectangle width={"1310px"} height={"950px"} color={"green"} top={"0px"} left={"0px"} description={"Container: IV.jsx"} position={"upperLeft"} />
				<Navi slideN={this.props.slideN}/>
			</div>
		)
	}
}

IV.PropTypes = {
	slideN: PropTypes.number.isRequired
}

export default IV;