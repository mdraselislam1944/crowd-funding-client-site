import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-yellow-300'>
       <h1 className='text-black'>Crowd funding </h1>
      <p>---------------------------</p>
       <h1 className='text-black'>C </h1>

      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <h1 className='bg-blue-400 font-extrabold p-4 text-red-600'>lllllllllllllllllllll</h1>
        <h1 className='bg-blue-400 font-extrabold p-4 text-red-600'>Sakib Boss!</h1>

        <h1 className='bg-blue-400 font-extrabold p-4 text-red-600'>Sakib Atreus!</h1>

        <h1 className='bg-blue-400 font-extrabold p-4 text-red-600'>Sakib Boss!</h1>

        <h1>Biriyani khawar dorkar chilo....</h1>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
