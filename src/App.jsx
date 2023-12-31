import { useState } from 'react'
import data from './data'
import List from './List'

const App = () => {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className="container">
        <h3> {people.length} Birthday Todays</h3>
        <List people={people} />
        {people.length > 0 ? (
          <button className="btn btn-block" onClick={() => setPeople([])}>
            Clear All
          </button>
        ) : (
          <button className="btn btn-block" onClick={() => setPeople(data)}>
            Reset
          </button>
        )}
      </section>
    </main>
  )
}
export default App
