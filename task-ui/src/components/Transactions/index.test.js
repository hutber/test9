import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Transactions from './index';

const shallowComp = (props = {}) => shallow(<div className="transactionsTable" />);

describe('Transactions', () => {
  test('should render without throwing an error', function() {
    const wrapper = shallowComp();
    expect(wrapper.find('.transactionsTable').exists()).toBe(true);
  });
});
