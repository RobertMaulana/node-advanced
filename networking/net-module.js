const server = require('net').createServer()

server.on('connection', socket => {
    console.log('client connected')
    socket.write('Welcome new client! \n')
    socket.on('data', data => {
        console.log('data is:', data)
        socket.write('data is: ')
        socket.write(data)
    })
    socket.on('end', () => {
        console.log('client disconnected')
    })
    socket.setEncoding('utf8')
})

server.listen(process.env.PORT || 5005, () => console.info(`server running at PORT ${process.env.PORT || 5005}`))