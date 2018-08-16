import React, { Component } from 'react';
import { Table } from '../shared';

class Transactions extends Component {
  constructor() {
    super();

    this.state = {
      loaded: false,
      dbURL: 'http://localhost:3000/api/transactions',
      transactionsData: null,
      columns: [],
      rows: []
    };
  }

  async componentDidMount() {
    if (this.state.loaded === false) {
      const dbData = await fetch(this.state.dbURL).then(response => response.json());
      this.setState({
        columns: Object.keys(dbData[0]),
        rows: dbData
      });
    }
  }

  render() {
    return <div>{this.state.rows.length > 0 && <Table columns={this.state.columns} rows={this.state.rows} />}</div>;
  }
}

export default Transactions;
