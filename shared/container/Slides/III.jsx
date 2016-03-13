import React, { PropTypes, Component } from 'react';
import Title from '../../components/SlideComponents/Title'; 
import Navi from '../../components/SlideComponents/Navi'; 


class III extends Component {
	render() {
		return (
			<div className="listView">
				<Title titleName={"React is for View Only"}/>
				<br/>
				<Navi slideN={this.props.slideN}/>
				<img height="400" width="1200" src="http://res.cloudinary.com/hashnode/image/upload/v1455634234/static_imgs/mern/twitter-mern-banner.png"></img>
				<img height="150" width="600" src="http://res.cloudinary.com/hashnode/image/upload/v1455637507/static_imgs/mern/imgs/mongodb.jpg"></img>
				<img height="150" width="600" src="http://res.cloudinary.com/hashnode/image/upload/v1455637506/static_imgs/mern/imgs/express.png"></img>
				<img height="150" width="600" src="http://res.cloudinary.com/hashnode/image/upload/v1455637506/static_imgs/mern/imgs/react.png"></img>
				<img height="150" width="600" src="http://res.cloudinary.com/hashnode/image/upload/v1455637506/static_imgs/mern/imgs/nodejs.png"></img>
				</div>
		)
	}
}

III.PropTypes = {
	slideN: PropTypes.number.isRequired
}

export default III;