import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Pagination from '../.';

const App = () => {
  return (
    <div>
      <Pagination pageSize={2} total={10} onChange={val =>{}} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));