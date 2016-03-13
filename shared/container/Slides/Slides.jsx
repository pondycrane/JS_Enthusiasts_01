import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';


class Slides extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showAddPost: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.add = this.add.bind(this);
  }

  handleClick(e) {
    this.setState({
      showAddPost: !this.state.showAddPost,
    });

    e.preventDefault();
  }

  add(name, title, content) {
    this.props.dispatch(Actions.addPostRequest({ name, title, content }));
    this.setState({
      showAddPost: false,
    });
  }

  componentDidMount() {
    if(this.props.posts.length === 0) {
      this.props.dispatch(Actions.fetchPosts());
    }
  }

  render() {
    return (
      <div>
		<h1>This is slides</h1>
		{this.props.children}
      </div>
    );
  }
}

Slides.need = [() => { return Actions.fetchPosts(); }];
Slides.contextTypes = {
  router: React.PropTypes.object,
};

function mapStateToProps(store) {
  return {
    posts: store.posts,
  };
}

Slides.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Slides);