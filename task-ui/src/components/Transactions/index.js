import React, { Component } from 'react';
import { fetchAPI } from '../../utils';
import { Table } from '../shared';
import { sortArray, searchArray } from 'task-library';

class Transactions extends Component {
  constructor() {
    super();

    this.state = {
      loaded: false,
      dbURL: 'http://localhost:3000/api/transactions',
      transactionsData: null,
      columns: [],
      rows: [],
      failed: false,
      sorted: false,
      unfilteredResults: []
    };

    this.sortTransactions = this.sortTransactions.bind(this);
    this.searchTransactions = this.searchTransactions.bind(this);
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
        rows: dbData,
        unfilteredRows: dbData
      });
    }
  }

  searchTransactions() {
    const searchTerm = this.refs.searchTransactions.value;
    let searchedData =
      this.refs.searchTransactions.value !== '' ? searchArray(this.state.unfilteredRows, searchTerm) : this.state.unfilteredRows;

    this.setState({
      rows: searchedData
    });
  }

  sortTransactions() {
    let dbData = this.state.sorted ? sortArray(this.state.rows, 'id') : sortArray(this.state.rows);
    this.setState({
      rows: dbData,
      sorted: !this.state.sorted
    });
  }

  render() {
    return (
      <div>
        {this.state.failed && <div>Sorry but the request failed.</div>}
        <input type="text" placeholder="Search by Name" ref="searchTransactions" onChange={this.searchTransactions} />
        <button onClick={this.sortTransactions} className={this.state.sorted ? 'on' : undefined}>
          Sort By Amount Toggle
        </button>
        {this.state.rows.length > 0 && <Table className="transactionsTable" columns={this.state.columns} rows={this.state.rows} />}
      </div>
    );
  }
}

export default Transactions;
