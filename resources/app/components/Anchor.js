import React, { Component } from 'react';

class Anchor extends Component {

  render() {
    return (
        <a href={`/#/${this.props.href}`} className={this.props.className}>
          <i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">{this.props.icon}</i>
          {this.props.name}
        </a>
    );
  }
}
export default Anchor;
