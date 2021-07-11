import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Pagination from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Pagination
      pageSize={10}
      total={100}
      onChange={page => {
        console.log(page)
      }}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
