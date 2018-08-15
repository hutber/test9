import React, { Component } from 'react';

class Tr extends Component {
  render() {
    const { children } = this.props;

    return (
      <tr>
        {Object.values(children).map((item, index) => (
          <td key={`tds_${index}`}>{item}</td>
        ))}
      </tr>
    );
  }
}

export default Tr;
