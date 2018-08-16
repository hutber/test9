import React, { Component } from 'react';
import Tr from './Tr';

class App extends Component {
  render() {
    const { columns, rows, className } = this.props;

    return (
      <table className={className}>
        <thead>
          <tr>
            {columns.map(item => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((item, index) => (
            <Tr key={`tds_${index}`}>{item}</Tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default App;
