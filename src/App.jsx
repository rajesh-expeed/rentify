import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app">
      <h1>Rentify</h1>
      <p>Deployed via GitHub Actions to GitHub Pages.</p>
      <button onClick={() => setCount((c) => c + 1)}>Clicked {count} times</button>
      <p className="meta">Build time: {__BUILD_TIME__}</p>
    </main>
  )
}
