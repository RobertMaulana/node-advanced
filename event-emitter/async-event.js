const fs = require('fs')
const eventEmitter = require('events')

class WithTime extends eventEmitter {
    execute (asyncFunc, ...args) {
        console.log(this)
        console.time('execute')
        this.emit('begin')
        asyncFunc(...args, (err, data) => {
            if (err) return this.emit('error', err)
            this.emit('data', data)
            console.timeEnd('execute')
            this.emit('end')
        })
    }
}

const withTime = new WithTime()

withTime.on('begin', () => console.log('About execute'))
withTime.on('end', () => console.log('Done with execute'))

withTime.execute(fs.readFile, __filename)