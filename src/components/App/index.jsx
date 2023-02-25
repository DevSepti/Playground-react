import { useState } from 'react';

import 'sanitize.css';
import './styles.scss';

function Index() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <button
        type="button"
        style={{ margin: '0 auto' }}
        onClick={() => setCount((prev) => prev + 1)}
      >
        count is
        {' '}
        {count}
      </button>
    </div>
  );
}

export default Index;
