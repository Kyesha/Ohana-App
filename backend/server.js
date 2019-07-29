const express = require('express')
const axios = require('axios')

const app = express()

app.get('/hello', (request, response) => {
  response.send('hello world')
})

app.get('/ohana', async (request, response) => {
  const res = await axios.get('https://www.eventbriteapi.com/v3/events/search?location.address=miami', { headers: { Authorization: 'Bearer TK7GHO3SN4TCQ6SAOL2B' }})
  const events = res.data.events.map(event => {
    return(
      {
        name: event.name.text,
        description: event.description.text,
        id:event.id,
        url:event.url

      }
    )
  })
  response.send(events)
})

const PORT = 5001

app.listen(PORT, () => console.log ('app is listening on PORT 5001'))
