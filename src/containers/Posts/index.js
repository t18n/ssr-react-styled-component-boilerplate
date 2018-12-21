import React from 'react';
import PropTypes from 'prop-types';
import loadData from 'helpers/loadData';

class Posts extends React.Component {
  constructor(props) {
    super(props);

    // Check if staticContext exists
    // because it will be undefined if rendered through a BrowserRouter
    if (props.staticContext && props.staticContext.data) {
      this.state = {
        data: props.staticContext.data,
      };
    } else {
      this.state = {
        data: [],
      };
    }
  }

  componentDidMount() {
    setTimeout(() => {
      if (window.__ROUTE_DATA__) {
        this.setState({
          data: window.__ROUTE_DATA__,
        });
        delete window.__ROUTE_DATA__;
      } else {
        loadData('posts').then((data) => {
          this.setState({
            data,
          });
        });
      }
    }, 0);
  }

  render() {
    const { data } = this.state;
    return <ul>{data.map(todo => <li key={todo.id}>{todo.title}</li>)}</ul>;
  }
}

Posts.propTypes = {
  staticContext: PropTypes.shape({
    data: PropTypes.array,
  }).isRequired,
};

export default Posts;
