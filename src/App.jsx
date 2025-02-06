import React from 'react'
import Button from './components/button'

const App = () => {
  return (
    <div>
      <div>
        <Button type="primary">Login</Button>
        <Button type="default">Add</Button>
        <Button type="danger">Send</Button>
      </div>
    </div>
  );
}

export default App