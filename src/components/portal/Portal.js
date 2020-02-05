import { Component } from 'react';
import ReactDOM from 'react-dom';

class Portal extends Component {
  elem = document.createElement('div');

  componentDidMount() {
    document.body.append(this.elem);
  }

  componentWillUnmount() {
    document.body.removeChild(this.elem);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.elem);
  }
}

export default Portal;