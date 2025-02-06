import React from 'react'
import Button from './components/button'

const App = () => {
  return (
    <div>
      <div className='flex ictems-center justify-center gap-4 mt-8'>
        <Button type="primary">primary</Button>
        <Button type="default">dafault</Button>
        <Button type="dashed">dashed</Button>
      </div>
    </div>
  );
}

export default App