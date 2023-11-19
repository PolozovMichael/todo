const express = require('express')
const app = express()

const PORT = process.env.PORT || 3001

app.use(express.json())

app.get('/todos', async (req, res) => {
  try {
    const fetchRes = await fetch('https://jsonplaceholder.typicode.com/todos')
    const json = await fetchRes.json()
    console.log(json)
    res.json(json)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.get('/todos/:id', async (req, res) => {
  try {
    const fetchRes = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${req.params.id}`,
    )
    const json = await fetchRes.json()
    console.log(json)
    res.json(json)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
