import { useEffect, useState } from 'react'

function App() {
  const [t, setT] = useState(false)
  useEffect(() => {
    setT(true)
  }, [])
  return <div>App</div>
}

export default App
