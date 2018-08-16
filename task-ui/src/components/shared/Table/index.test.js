import React from 'react';
import { shallow } from 'enzyme';
import Table from './index';

const defaultProps = {
  columns: ['a', 'lot', 'of', 'columns'],
  rows: [
    {
      a: 'info',
      lot: 'info',
      of: 'info',
      columns: 'info'
    }
  ]
};

const shallowComp = (props = {}) => shallow(<Table className="transactionsTable" {...defaultProps} {...props} />);

describe('Table', () => {
  const wrapper = shallowComp();
  test('should render without throwing an error', () => {
    expect(wrapper.find('.transactionsTable').exists()).toBe(true);
  });
});
