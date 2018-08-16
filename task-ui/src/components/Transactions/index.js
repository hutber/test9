import React, { Component } from 'react';
import { fetchAPI } from '../../utils';
import { Table } from '../shared';

class Transactions extends Component {
  constructor() {
    super();

    this.state = {
      loaded: false,
      dbURL: 'http://localhost:3000/api/transactions',
      transactionsData: null,
      columns: [],
      rows: [],
      failed: false
    };
  }

  async componentDidMount() {
    if (this.state.loaded === false) {
      const dbData = await fetchAPI(this.state.dbURL);

      if (!dbData[0]) {
        this.setState({ failed: true });
        return;
      }

      this.setState({
        columns: Object.keys(dbData[0]),
        rows: dbData
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.failed && <div>Sorry but the request failed.</div>}
        {this.state.rows.length > 0 && <Table className="transactionsTable" columns={this.state.columns} rows={this.state.rows} />}
      </div>
    );
  }
}

export default Transactions;
