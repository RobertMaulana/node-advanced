const app = require('express')()
require('dotenv').config()
const events = require('./event-emitter/async-event')

app.listen(process.env.PORT || 5005, () => console.info(`server running at PORT ${process.env.PORT || 5005}`))