import { useState } from 'react'
import styles from './App.module.scss'

function App() {
  const [input, setInput] = useState('')
  const [items, setItems] = useState([])

  // Add item
  const handleSubmit = (e) => {
    e.preventDefault()
    // Bail if input is empty
    if (input.trim() === '') return
    // Add items to state
    setItems([...items, {
      text: input,
      completed: false
    }])
    // Reset input state to empty
    setInput('')
  }

  // Remove item
  const removeItem = (index) => {
    // _ is the item, but is unused
    const newItems = items.filter((_, i) => i !== index)
    setItems(newItems)
  }

  return (
    <div className={styles.container}>

      <h1 className="headline">oridino</h1>
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <input 
          type="text"
          name="add-item"
          className={styles.formInput}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add item</button>
      </form>

      <ul className={styles.itemsList}>
        {items.map((item, index) => (
          <li key={index} className={styles.itemsListItem}>
            <span>{item.text}</span>
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App
