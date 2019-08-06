const express = require('express')
const axios = require('axios')

const app = express();

app.get('/hello', (request, response) => {
  response.send('hello world')
})

// app.get('/ohana', async (request, response) => {
//   const res = await axios.get('https://www.eventbriteapi.com/v3/events/search?location.address=miami&location.within=100mi&expand=venue -H { headers: { Authorization: 'Bearer TK7GHO3SN4TCQ6SAOL2B' }})
//   const locations = res.data.locations.map( => {
//     console.log(event);
//     return(
//       {
//         location:location.address
//
//
//
//       }
//     )
//   })


app.get('/ohana', async (request, response) => {
  const res = await axios.get('https://www.eventbriteapi.com/v3/events/search/?location.address=miami&expand=venue&token=TK7GHO3SN4TCQ6SAOL2B')
  const events = res.data.events.map(event => {
    console.log(event);
    return(
      {
        name: event.name.text,
        description: event.description.text,
        // url: event.url,
        logo: event.logo.url,
        details:event.details,
        is_free: event.is_free,
        local:event.start.local,
        utc:event.start.utc,
        summary:event.summary,
        venue:event.venue.address.localized_address_display



      }
    )
  })
  response.send(events)
})

const PORT = 5001

app.listen(PORT, () => console.log ('app is listening on PORT 5001'))
