import React, { PropTypes } from 'react';
import BulletPoint from './BulletPoint'; 
import Checkbox from 'material-ui/lib/checkbox';
import Card from 'material-ui/lib/card/card';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';

function ListGroup(props) {
	const styles = {
		block: {
			maxWidth: 250,
		},
		checkbox: {
			marginBottom: 16,
		},
	};
	return (
	<div>
		<Card>
			{ 
				props.pic.length > 0 ? 
				<CardMedia overlay={<CardTitle title="React vs Angular"/>}>
					<img src={props.pic} />
				</CardMedia>
				: null
			}
			<CardTitle title={ props.titleName } subtitle={ props.subtitleName } />
			{ props.ideas.map((idea, i) =>
				(	
					<Checkbox
						label={idea}
						style={styles.checkbox}
						key={i}
					/>
				)
			) }
		</Card>
	</div>
	)
}

ListGroup.PropTypes = {
	titleName: PropTypes.string.isRequired, 
	subtitleName: PropTypes.string.isRequired,
	ideas: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
	pic: PropTypes.string.isRequired
}

export default ListGroup;